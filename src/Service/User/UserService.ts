import { injectable } from 'inversify'
import { User } from '../../Entity/User'
import { IUserService } from './UserServiceType'
import jwt from 'jsonwebtoken'
import { generate6Number } from '../../Tools/Helper'

@injectable()
export class UserService implements IUserService {
    generateToken(user: User): string {
        return jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET ?? '',
            { expiresIn: '24h' }
        )
    }

    generateRefreshToken(user: User): string {
        return jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET ?? '',
            { expiresIn: '24h' }
        )
    }

    generateCode() {
        return String(generate6Number())
    }

    async sendPasswordCode(user: User) {
        console.log(user)
    }

    async sendCodeActivation (user: User) {
        console.log(user)
    }
}
