import { injectable } from "inversify";
import { IDBExtractorService } from "./DBExtractorService";

@injectable()
export class MysqlExtractorService implements IDBExtractorService {
    
    duplicateEntryValue(e: any) {
        return e.sqlMessage.match(/'.+?'/g)[0].replace(/'/g, '')
    }
    
}