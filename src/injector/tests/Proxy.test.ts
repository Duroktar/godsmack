import { staticTestProps } from '../../tests/staticTestProps';
import { Container } from '../Container';
import { Singleton } from '../decorators';
import { compare } from '../proxify';

describe('Proxy', () => {
  const expect = staticTestProps.expect

  it('passes runtime generic tests', () => {
    const noise1 = 'noise1';
    const noise2 = 'noise2';
    const noise3 = 'noise3';
    const noise4 = 'noise4';

    interface BaseProxyClass {
      noise(): string
    }
    class ProxyImplementation1 implements BaseProxyClass {
      noise = () => { return noise1 }
    }
    class ProxyImplementation2 implements BaseProxyClass {
      noise = () => { return noise2 }
    }

    interface ExtendedProxyClass extends BaseProxyClass {
      extendedNoise(): string
    }

    @Singleton()
    class TestExtendedProxyClass1 implements ExtendedProxyClass {
      constructor(public dep: BaseProxyClass) {}

      extendedNoise = () => { return this.dep.noise() + ' ' + this.noise() }
      noise = () => { return noise3 }
    }

    interface MasterProxyClass {
      masterNoise(): string
    }
    @Singleton()
    class TestMasterProxyClass1 implements MasterProxyClass {
      constructor(public dep: ExtendedProxyClass) {}

      masterNoise = () => { return noise4 + ' ' + this.dep.extendedNoise() }
    }

    const container = new Container({ hotSwapping: true })
      .addSingleton<BaseProxyClass>(ProxyImplementation1)
      .addSingleton<ExtendedProxyClass>(TestExtendedProxyClass1)
      .addSingleton<MasterProxyClass>(TestMasterProxyClass1)

    const base = container.resolve<BaseProxyClass>()
    const extended = container.resolve<ExtendedProxyClass>()
    const master = container.resolve<MasterProxyClass>()

    expect(compare(base, container.resolve<BaseProxyClass>())).toBe(true)

    expect(base.noise()).toEqual(noise1)

    expect(extended.noise()).toEqual(noise3)
    expect(extended.extendedNoise()).toEqual(noise1 + ' ' + noise3)
    expect(master.masterNoise()).toEqual(noise4 + ' ' + noise1 + ' ' + noise3)

    container.replace<BaseProxyClass>(ProxyImplementation2)

    expect(compare(base, container.resolve<BaseProxyClass>())).toBe(true)

    expect(base.noise()).toEqual(noise2)

    expect(extended.noise()).toEqual(noise3)
    expect(extended.extendedNoise()).toEqual(noise2 + ' ' + noise3)
    expect(master.masterNoise()).toEqual(noise4 + ' ' + noise2 + ' ' + noise3)
  })
});
