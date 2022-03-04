import { staticTestProps } from '../../tests/staticTestProps';
import { nameof } from "../../types";
import { Container } from '../Container';
import { Singleton } from '../decorators';

describe('Proxy', () => {
  const expect = staticTestProps.expect

  const noise1 = 'brappp';
  const noise2 = 'pfft';
  const noise3 = 'gaaoorg';

  interface BaseClass {
    noise(): string
  }
  class Implementation1 implements BaseClass {
    noise = () => { return noise1 }
  }
  class Implementation2 implements BaseClass {
    noise = () => { return noise2 }
  }

  interface ExtendedClass extends BaseClass {
    multiNoise(): string
  }
  @Singleton()
  class TestParentClass1 implements ExtendedClass {
    constructor(public impl1: BaseClass) {}

    multiNoise = () => { return this.impl1.noise() + ' ' + this.noise() }
    noise = () => { return noise3 }
  }

  it('passes internal tests', () => {

    // TODO: wrt the todo just below this one, make sure the generic
    // name is added to the container as this currently does not work
    // const container = new Container({ hotSwapping: true })
    //   .addSingleton<BaseClass>(Implementation1)

    // TODO: Implement this in the inject transformer (it needs "BaseClass"s name)
    // const instance = container.resolve<BaseClass>()
    // const instance = container.resolve(nameof<BaseClass>())

    const container = new Container({ hotSwapping: true })
      .addSingleton(nameof<BaseClass>(), Implementation1)
      .addSingleton(nameof<ExtendedClass>(), TestParentClass1)

    const instance = container.resolve(nameof<BaseClass>())

    expect(instance.toString()).toEqual(container.resolve(Implementation1).toString())
    expect(container.resolve(Implementation1).toString()).toEqual(instance.toString())
    expect(instance.noise()).toEqual(noise1)

    const extended = container.resolve(nameof<ExtendedClass>())

    expect(extended.noise()).toEqual(noise3)
    expect(extended.multiNoise()).toEqual(noise1 + ' ' + noise3)

    container.replace(nameof<BaseClass>(), Implementation2)

    expect(instance.toString()).toEqual(container.resolve(Implementation2).toString())
    expect(container.resolve(Implementation2).toString()).toEqual(instance.toString())

    expect(instance.noise()).toEqual(noise2)

    expect(extended.noise()).toEqual(noise3)
    expect(extended.multiNoise()).toEqual(noise2 + ' ' + noise3)
  })
});
