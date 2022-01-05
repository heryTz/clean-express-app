import { inject, injectable } from 'inversify'
import { getRepository, SelectQueryBuilder } from 'typeorm'
import { User } from '../../Entity/User'
import { ILoggerService } from '../../Service/Logger/LoggerServiceType'
import { TYPES } from '../../Type'
import { IUserRepository } from './UserRepositoryType'

@injectable()
export class UserRepository implements IUserRepository {
    @inject(TYPES.LoggerService) logger: ILoggerService

    private userRepo = getRepository(User)

    findComplete(): SelectQueryBuilder<User> {
        return this.userRepo
            .createQueryBuilder('user')
            .addSelect('user.password')
            .addSelect('user.codeResetPassword')
            .addSelect('user.codeActivation')
    }

    async findById(id: any): Promise<User | undefined> {
        try {
            return await this.userRepo.findOne(id)
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }

    async findCompleteByEmail(email: string): Promise<User | undefined> {
        try {
            return await this.findComplete().where('user.email = :email', { email }).getOne()
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
