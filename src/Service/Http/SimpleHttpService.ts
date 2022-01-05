import { Response } from "express";
import { injectable } from "inversify";
import { IHttpService } from "./HttpServiceType";

@injectable()
export class SimpleHttpService implements IHttpService {

    private isDev = process.env.NODE_ENV === 'dev'

    notFound(res: Response, message?: string) {
        return res.status(404).json({
            message: this.isDev && message ? message : 'Not Found'
        })
    }

    badRequest(res: Response, message?: string) {
        return res.status(400).json({
            message: this.isDev && message ? message : 'Bad request'
        })
    }

    errorServer(res: Response, message?: string) {
        return res.status(500).json({
            message: this.isDev && message ? message : 'Error server'
        })
    }

    forbidden(res: Response, message?: string) {
        return res.status(403).json({
            message: this.isDev && message ? message : 'Forbidden'
        })
    }

    unauthorized(res: Response) {
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }

    tokenExpired(res: Response) {
        return res.status(401).json({
            message: 'Token expired'
        })
    }
    
}