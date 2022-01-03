import 'reflect-metadata'
import { Container } from 'inversify'
import { ILoggerService } from './Service/Logger/LoggerServiceType'
import { TYPES } from './Type'
import { BasicLoggerService } from './Service/Logger/BasicLoggerService'

const container = new Container()

container.bind<ILoggerService>(TYPES.LoggerService).to(BasicLoggerService)

export default container
