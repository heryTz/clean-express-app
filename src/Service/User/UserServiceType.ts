import { User } from '../../Entity/User'

export interface IUserService {
    generateToken: (user: User) => string
    generateRefreshToken: (user: User) => string
}
