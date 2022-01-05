import { User } from '../../Entity/User'

export interface IUserRepository {
    findById: (id: any) => Promise<User | undefined>
    findCompleteByEmail: (email: string) => Promise<User | undefined>
    save: (user: User) => Promise<User>
}
