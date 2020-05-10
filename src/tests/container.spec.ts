import { Container } from "../framework";
import { staticTestProps } from './staticTestProps';

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
        return 'FUCKING BARK'
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

    const container = new Container()
      .addTransient(Cat, FeralCat)
      .addTransient(Dog, FeralDog)
      .addTransient(Wolf, FeralWolf)

    expect(container.resolve(Cat).meow()).to.equal('FUCKING MEOW')
    expect(container.resolve(Dog).bark()).to.equal('FUCKING BARK')
    expect(container.resolve(Wolf).howl()).to.equal('FUCKING RAORGH')
  });

  it('passes internal tests', () => {
    Container.Test(staticTestProps)
  });
});
