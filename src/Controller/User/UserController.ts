import { Request, Response } from 'express'
import { controller, Controller, httpGet, request, response } from 'inversify-express-utils'

@controller('/api')
export class UserController implements Controller {
    @httpGet('/users')
    private whoami(@request() req: Request, @response() res: Response) {
        return res.json('Hello world!')
    }
}
