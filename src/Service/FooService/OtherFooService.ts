import { injectable } from 'inversify'
import { FooService } from './FooServiceType'

@injectable()
export class OtherFooService implements FooService {
    printDescription(): string {
        return 'This is an action from OtherFooService'
    }
}
