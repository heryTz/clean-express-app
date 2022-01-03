import { User } from "../../Entity/User";

export interface IUserService {
    findById: (id: any) => Promise<User>
}