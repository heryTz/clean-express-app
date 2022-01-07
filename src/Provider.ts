import 'reflect-metadata'
import { Container } from 'inversify'
import { ILoggerService } from './Service/Logger/LoggerServiceType'
import { TYPES } from './Type'
import { BasicLoggerService } from './Service/Logger/BasicLoggerService'
import { IHasherService } from './Service/Hasher/HasherServiceType'
import { BcryptHasherService } from './Service/Hasher/BcryptHasherService'
import { IHttpService } from './Service/Http/HttpServiceType'
import { SimpleHttpService } from './Service/Http/SimpleHttpService'
import { IUserRepository } from './Repository/User/UserRepositoryType'
import { UserRepository } from './Repository/User/UserRepository'
import { IUserService } from './Service/User/UserServiceType'
import { UserService } from './Service/User/UserService'
import { IDBExtractorService } from './Service/DBExtractor/DBExtractorServiceType'
import { MysqlExtractorService } from './Service/DBExtractor/MysqlExtractorService'

const container = new Container()

container.bind<ILoggerService>(TYPES.LoggerService).to(BasicLoggerService)
container.bind<IHasherService>(TYPES.HasherService).to(BcryptHasherService)
container.bind<IHttpService>(TYPES.HttpService).to(SimpleHttpService)
container.bind<IUserService>(TYPES.UserService).to(UserService)
container.bind<IDBExtractorService>(TYPES.DBExtractorService).to(MysqlExtractorService)

container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository)

export default container
