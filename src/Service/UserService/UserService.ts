import { inject, injectable } from "inversify";
import { getRepository } from "typeorm";
import { User } from "../../Entity/User";
import { TYPES } from "../../Type";
import { ILoggerService } from "../Logger/LoggerServiceType";
import { IUserService } from "./UserServiceType";

@injectable()
export class UserService implements IUserService {
    @inject(TYPES.LoggerService) logger: ILoggerService

    private userRepo = getRepository(User)

    async findById(id: any): Promise<User> {
        try {
            return await this.userRepo.findOneOrFail(id)
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }

}