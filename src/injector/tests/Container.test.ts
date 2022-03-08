import { staticTestProps } from '../../tests/staticTestProps';
import { Container } from '../Container';

describe('Container Class', () => {
  const expect = staticTestProps.expect

  it('runtime type dependency resolution', () => {

    const noise1 = 'noise1';
    const noise2 = 'noise2';

    interface Interface1 {
      noise(): string
    }
    interface Interface2 {
      noise(): string
    }

    class Implementation1 implements Interface1 {
      noise() { return noise1 }
    }
    class Implementation2 implements Interface2 {
      noise() { return noise2 }
    }

    const container = new Container()
      .addService<Interface2>(Implementation2)
      .addSingleton<Interface1>(Implementation1)

    // Generics
    const ifce1 = container.resolve<Interface1>()

    // isSingleton
    expect(container.resolve<Interface1>())
      .toBe(ifce1)

    // usage
    expect(ifce1.noise())
      .toEqual(noise1)

    // Transient (Service)
    const ifce2 = container.resolve<Interface2>()

    // isTransient
    expect(container.resolve<Interface2>())
      .not.toBe(ifce2)

    // usage
    expect(ifce2.noise())
      .toEqual(noise2)

    // compare usage
    expect(ifce2.noise())
      .not.toEqual(ifce1.noise())
  })
});
