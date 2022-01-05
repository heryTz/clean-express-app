import { hashSync } from "bcryptjs"
import prompts from "prompts"
import { createConnection, getRepository } from "typeorm"
import { User } from "../Entity/User"

(async () => {
    createConnection()
    .then(async () => {
        const userRepo = getRepository(User)
        try {
            const response = await prompts([
                {
                    type: 'text',
                    name: 'email',
                    message: 'Enter email adress:',
                    validate: email => Boolean(email)
                },
                {
                    type: 'password',
                    name: 'password',
                    message: 'Enter password:'
                },
                {
                    type: 'password',
                    name: 'repassPassword',
                    message: 'Confirm password:'
                },
                {
                    type: 'select',
                    name: 'activated',
                    message: 'You want that this account is activated:',
                    choices: [
                        { title: 'Yes', value: true },
                        { title: 'No', value: false }
                    ]
                }
            ])
            if (response.password !== response.repassPassword) {
                console.warn('The password is not match')
                return 
            }
            const user = new User()
            user.email = response.email
            user.password = hashSync(response.password)
            user.actived = response.activated
            await userRepo.save(user)
            console.info('User created successfully!')
        } catch (e) {
            console.log(e)
        }
        return
    })
    .catch(console.log)
})()