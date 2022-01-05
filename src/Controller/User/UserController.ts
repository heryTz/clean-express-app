import { Response } from 'express'
import { inject } from 'inversify'
import { controller, Controller, httpPost, request, response } from 'inversify-express-utils'
import { User } from '../../Entity/User'
import { IUserRepository } from '../../Repository/User/UserRepositoryType'
import { IDBExtractorService } from '../../Service/DBExtractor/DBExtractorService'
import { IHasherService } from '../../Service/Hasher/HasherServiceType'
import { IHttpService } from '../../Service/Http/HttpServiceType'
import { IUserService } from '../../Service/User/UserServiceType'
import { TYPES } from '../../Type'
import { UserCreateRequest } from './UserType'

@controller('/api')
export class UserController implements Controller {

    @inject(TYPES.HttpService) httpService: IHttpService
    @inject(TYPES.UserService) userService: IUserService
    @inject(TYPES.DBExtractorService) dbExtractorService: IDBExtractorService
    @inject(TYPES.HasherService) hasherService: IHasherService
    @inject(TYPES.UserRepository) userRepository: IUserRepository

    @httpPost('/users')
    private async create(@request() req: UserCreateRequest, @response() res: Response) {
        const data = req.body
        if (!data.email || !data.password) return this.httpService.badRequest(res)
        try {
            const user = new User()
            user.email = data.email
            user.password = this.hasherService.hash(data.password)
            user.codeActivation = this.userService.generateCode()
            const newUser = await this.userRepository.save(user)
            const newUserData = await this.userRepository.findById(newUser.id) as User
            // TODO: handle refresh token when create user
            this.userService.sendCodeActivation(newUserData)
            return res.json({
                user: newUserData,
                token: this.userService.generateToken(newUserData)
            })
        } catch (e: any) {
            if (e.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ value: this.dbExtractorService.duplicateEntryValue(e) })
            } else {
                return this.httpService.errorServer(res)
            }
        }
    }

}
