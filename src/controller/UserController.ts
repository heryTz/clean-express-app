import { Request, Response } from 'express'
import { Controller, controller, httpGet, request, response } from 'inversify-express-utils'

@controller('/users')
export class UserController implements Controller {
    @httpGet('/')
    private show(@request() req: Request, @response() res: Response) {
        return res.json('Show user!')
    }
}
