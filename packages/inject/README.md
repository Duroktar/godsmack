# GODSMACK - DI

## Usage

``` ts

// -- Definition


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


// -- Registration
const container = new Container()
  // Classes exist at runtime so can be used as arguments
  .addSingleton(Cat, FeralCat)
  .addSingleton(Dog, FeralDog)
  .addSingleton(Wolf, FeralWolf)

  // Interfaces _must_ be used as a generic type argument
  .addSingleton<CatType>(Cat)
  .addSingleton<DogType>(Dog)
  .addSingleton<WolfType>(Wolf)

  // Dependencies can be transient (ie: not singletons)
  .addService<IMutantAnimal>(MutantAnimal)


// --- Resolution
const mutant = container.resolve<IMutantAnimal>()

expect(mutant.meow()).toEqual('meow')
expect(mutant.bark()).toEqual('ruff')
expect(mutant.howl()).toEqual('raorgh')


// -- more examples
expect(container.resolve<CatType>().meow()).toEqual('meow')
expect(container.resolve<DogType>().bark()).toEqual('ruff')
expect(container.resolve<WolfType>().howl()).toEqual('raorgh')

expect(container.resolve<Cat>().meow()).toEqual('FUCKING MEOW')
expect(container.resolve<Dog>().bark()).toEqual('FUCKING RUFF')
expect(container.resolve<Wolf>().howl()).toEqual('FUCKING RAORGH')

```
