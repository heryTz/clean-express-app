import { Request, Response } from 'express'
import { inject } from 'inversify'
import { controller, Controller, httpGet, request, response } from 'inversify-express-utils'
import { FooService } from '../Service/FooService/FooServiceType'
import { TYPES } from '../Type'

@controller('/')
export class DefaultController implements Controller {
    @inject(TYPES.FooService) fooService: FooService

    @httpGet('/')
    private index(@request() req: Request, @response() res: Response) {
        return res.json(`Hello world! ${this.fooService.printDescription()}`)
    }
}
