import { Request } from "express";

export interface UserCreateRequest extends Request {
    body: {
        email: string
        password: string
    }
}