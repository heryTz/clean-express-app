import { Response } from "express";

export interface ResponseData {
    message?: string
    log?: string
}

export interface IHttpService {
    notFound: (res: Response, data?: ResponseData) => Response
    badRequest: (res: Response, data?: ResponseData) => Response
    errorServer: (res: Response, data?: ResponseData) => Response
    unauthorized: (res: Response, data?: ResponseData) => Response
    tokenExpired: (res: Response, data?: ResponseData) => Response
    forbidden: (res: Response, data?: ResponseData) => Response
}