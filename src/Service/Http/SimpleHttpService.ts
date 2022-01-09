import { Response } from "express";
import { injectable } from "inversify";
import { IHttpService, ResponseData } from "./HttpServiceType";

@injectable()
export class SimpleHttpService implements IHttpService {

    private isDev = process.env.NODE_ENV === 'dev'

    responseData(data?: ResponseData, defaultMessage?: string): ResponseData {
        return {
            message: this.isDev && data?.message ? data.message : defaultMessage,
            log: this.isDev ? data?.log : undefined 
        }
    }

    notFound(res: Response, data?: ResponseData) {
        return res.status(404).json(this.responseData(data, 'Not Found'))
    }

    badRequest(res: Response, data?: ResponseData) {
        return res.status(400).json(this.responseData(data, 'Bad request'))
    }

    errorServer(res: Response, data?: ResponseData) {
        return res.status(500).json(this.responseData(data, 'Error server'))
    }

    forbidden(res: Response, data?: ResponseData) {
        return res.status(403).json(this.responseData(data, 'Forbidden'))
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