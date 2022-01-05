import { Response } from 'express'

export interface IHttpService {
    notFound: (res: Response, message?: string) => Response
    badRequest: (res: Response, message?: string) => Response
    errorServer: (res: Response, message?: string) => Response
    unauthorized: (res: Response, message?: string) => Response
    tokenExpired: (res: Response, message?: string) => Response
    forbidden: (res: Response, message?: string) => Response
}
