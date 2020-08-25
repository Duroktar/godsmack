import { Container } from "../framework";
import { staticTestProps } from './staticTestProps';
import { Singleton } from "../injector";
import { nameof } from "../types";

describe('Container Class', () => {
  const expect = staticTestProps.expect

  it('works godammit', () => {
    interface CatType {
      meow(): string;
    };

    interface DogType {
      bark(): string;
    };

    interface WolfType {
      howl(): string;
    };

    class Cat implements CatType {
      meow(): string {
        return 'meow'
      }
    }

    class FeralCat implements CatType {
      meow(): string {
        return 'FUCKING MEOW'
      }
    }

    class Dog implements DogType {
      bark(): string {
        return 'ruff'
      }
    }

    class FeralDog implements DogType {
      bark(): string {
        return 'FUCKING RUFF'
      }
    }

    class Wolf implements WolfType {
      howl(): string {
        return 'raorgh'
      }
    }

    class FeralWolf implements WolfType {
      howl(): string {
        return 'FUCKING RAORGH'
      }
    }

    interface IMutantAnimal {
      howl(): string
      bark(): string
      meow(): string
    }

    @Singleton()
    class MutantAnimal implements IMutantAnimal {
      constructor(
        private wolf: WolfType,
        private dog: DogType,
        private cat: CatType,
      ) { }

      public howl = (): string => {
        return this.wolf.howl()
      }
      public bark = (): string => {
        return this.dog.bark()
      }
      public meow = (): string => {
        return this.cat.meow()
      }
    }

    const container = new Container()
      .addSingleton(nameof<Cat>(), FeralCat)
      .addSingleton(nameof<Dog>(), FeralDog)
      .addSingleton(nameof<Wolf>(), FeralWolf)
      .addSingleton(nameof<CatType>(), Cat)
      .addSingleton(nameof<DogType>(), Dog)
      .addSingleton(nameof<WolfType>(), Wolf)
      .addSingleton(nameof<IMutantAnimal>(), MutantAnimal)

    expect(container.resolve(Cat).meow()).toEqual('FUCKING MEOW')
    expect(container.resolve(Dog).bark()).toEqual('FUCKING RUFF')
    expect(container.resolve(Wolf).howl()).toEqual('FUCKING RAORGH')

    const mutant = container.resolve<IMutantAnimal>()

    expect(mutant.meow()).toEqual('meow')
    expect(mutant.bark()).toEqual('ruff')
    expect(mutant.howl()).toEqual('raorgh')
  });

  it('passes internal tests', () => {

    const noise1 = 'brappp';
    const noise2 = 'pfft';

    interface BaseClass {
      noise(): string
    }
    class Implementation1 {
      noise() { return noise1 }
    }
    class Implementation2 {
      noise() { return noise2 }
    }

    const container = new Container()
      .addSingleton<BaseClass>(Implementation1, Implementation2)

    // Singleton
    const instance = container.resolve(Implementation1)

    expect(instance).toEqual(container.resolve(Implementation1))
    expect(instance.noise()).toEqual(noise2)

    expect(container.resolve(Implementation1)).toEqual(instance)
    expect(container.resolve(Implementation1).noise()).toEqual(noise2)
    expect(container.resolve(Implementation1)).toEqual(container.resolve(Implementation1))
  })
});
