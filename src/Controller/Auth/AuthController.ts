import { Response } from 'express'
import { inject } from 'inversify'
import { controller, Controller, httpPost, request, response } from 'inversify-express-utils'
import { User } from '../../Entity/User'
import { IUserRepository } from '../../Repository/User/UserRepositoryType'
import { IHasherService } from '../../Service/Hasher/HasherServiceType'
import { IHttpService } from '../../Service/Http/HttpServiceType'
import { IUserService } from '../../Service/User/UserServiceType'
import { TYPES } from '../../Type'
import { AuthRequest } from './AuthType'

@controller('/api')
export class AuthController implements Controller {
    @inject(TYPES.HasherService) hasherService: IHasherService
    @inject(TYPES.HttpService) httpService: IHttpService
    @inject(TYPES.UserRepository) userRepository: IUserRepository
    @inject(TYPES.UserService) userService: IUserService

    @httpPost('/login')
    private async login(@request() req: AuthRequest, @response() res: Response) {
        try {
            const user = await this.userRepository.findCompleteByEmail(req.body.email)
            if (!user) return this.httpService.unauthorized(res)

            const isMatch = this.hasherService.compare(req.body.password, user.password)
            if (!isMatch) return this.httpService.unauthorized(res)

            const userData = (await this.userRepository.findById(user.id)) as User
            return res.json({
                token: this.userService.generateToken(userData),
                user: userData
            })
        } catch (e) {
            return this.httpService.errorServer(res, String(e))
        }
    }
}
