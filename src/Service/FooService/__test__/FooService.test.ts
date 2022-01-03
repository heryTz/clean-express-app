import container from '../../../Provider'
import { TYPES } from '../../../Type'
import { FooService } from '../FooServiceType'

const fooService = container.get<FooService>(TYPES.FooService)

it('FooService', () => {
    expect(fooService.printDescription()).toBe('This is an action from FooService')
})
