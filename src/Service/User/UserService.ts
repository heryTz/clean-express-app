import { injectable } from 'inversify'
import { User } from '../../Entity/User'
import { IUserService } from './UserServiceType'
import jwt from 'jsonwebtoken'

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
}
