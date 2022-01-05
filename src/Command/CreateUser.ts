import prompts from 'prompts'
import { createConnection, getRepository } from 'typeorm'
import { User } from '../Entity/User'
import container from '../Provider'
import { IHasherService } from '../Service/Hasher/HasherServiceType'
import { TYPES } from '../Type'

;(async () => {
    const hasherService = container.get<IHasherService>(TYPES.HasherService)

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
                ])
                if (response.password !== response.repassPassword) {
                    console.warn('The password is not match')
                    return
                }
                const user = new User()
                user.email = response.email
                user.password = hasherService.hash(response.password)
                user.actived = true
                await userRepo.save(user)
                console.info('User created successfully!')
            } catch (e) {
                console.log(e)
            }
            return
        })
        .catch(console.log)
})()
