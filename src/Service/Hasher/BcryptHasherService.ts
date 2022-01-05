import { IHasherService } from "./HasherServiceType";
import bcrypt from 'bcryptjs'
import { injectable } from "inversify";

@injectable()
export class BcryptHasherService implements IHasherService {
    
    compare (text: string, hash: string) {
        return bcrypt.compareSync(text, hash)
    }

    hash(text: string) {
        return bcrypt.hashSync(text, process.env.PASSWORD_SALT)
    }
}