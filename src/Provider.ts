import 'reflect-metadata'
import { Container } from 'inversify'
import { ILoggerService } from './Service/Logger/LoggerServiceType'
import { TYPES } from './Type'
import { BasicLoggerService } from './Service/Logger/BasicLoggerService'
import { IUserService } from './Service/UserService/UserServiceType'
import { UserService } from './Service/UserService/UserService'

const container = new Container()

container.bind<IUserService>(TYPES.UserService).to(UserService)
container.bind<ILoggerService>(TYPES.LoggerService).to(BasicLoggerService)

export default container
