import { Request, Response } from 'express'
import { controller, Controller, httpGet, request, response } from 'inversify-express-utils'

@controller('/')
export class DefaultController implements Controller {
    @httpGet('/')
    private index(@request() req: Request, @response() res: Response) {
        return res.json('Hello world!')
    }
}
