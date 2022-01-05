import { User } from '../../Entity/User'

export interface IUserService {
    generateToken: (user: User) => string
    generateRefreshToken: (user: User) => string
    generateCode: () => string
    sendCodeActivation: (user: User) => void
    sendPasswordCode: (user: User) => void
}
