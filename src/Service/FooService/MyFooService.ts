import { injectable } from 'inversify'
import { FooService } from './FooServiceType'

@injectable()
export class MyFooService implements FooService {
    printDescription(): string {
        return 'This is an action from MyFooService'
    }
}
