import { injectable } from "inversify";
import { ILoggerService } from "./LoggerServiceType";

@injectable()
export class BasicLoggerService implements ILoggerService {

    error <T>(e: T) {
        console.log(e)
    }

}