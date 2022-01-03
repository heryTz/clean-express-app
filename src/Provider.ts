import 'reflect-metadata'
import { Container } from 'inversify'
import { FooService } from './Service/FooService/FooServiceType'
import { MyFooService } from './Service/FooService/MyFooService'
import { TYPES } from './Service/Index'

const container = new Container()

container.bind<FooService>(TYPES.FooService).to(MyFooService)

export default container
