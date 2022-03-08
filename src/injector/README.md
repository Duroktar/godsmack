# GODSMACK - DI

## Usage

``` ts
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
  // Interfaces can be used with the `nameof` helper func
  .addSingleton(nameof<CatType>(), Cat)
  .addSingleton(nameof<DogType>(), Dog)
  .addSingleton(nameof<WolfType>(), Wolf)

  // Classes exist at runtime so `nameof` is not necessary
  .addSingleton(Cat, FeralCat)
  .addSingleton(Dog, FeralDog)
  .addSingleton(Wolf, FeralWolf)

  .addSingleton(nameof<IMutantAnimal>(), MutantAnimal)

expect(container.resolve<CatType>().meow()).toEqual('meow')
expect(container.resolve<DogType>().bark()).toEqual('ruff')
expect(container.resolve<WolfType>().howl()).toEqual('raorgh')

expect(container.resolve<Cat>().meow()).toEqual('FUCKING MEOW')
expect(container.resolve<Dog>().bark()).toEqual('FUCKING RUFF')
expect(container.resolve<Wolf>().howl()).toEqual('FUCKING RAORGH')

const mutant = container.resolve<IMutantAnimal>()

expect(mutant.meow()).toEqual('meow')
expect(mutant.bark()).toEqual('ruff')
expect(mutant.howl()).toEqual('raorgh')
```


## TODO

- Finish this readme
- Finish implementing runtime generics, eg:

``` ts
/**
 * When using an Interface
**/
interface BaseInterface { ... }

// BROKEN !!!
container.resolve<BaseInterface>()

// works
container.resolve(nameof<BaseInterface>())

const container = new Container()
  .addSingleton<BaseInterface>(Impl) // BROKEN !!!
  .addSingleton(BaseInterface, Impl) // works

/**
 * When using a Class
**/
class BaseClass { ... }

// works
container.resolve<BaseClass>()

// works
container.resolve(nameof<BaseClass>())

const container = new Container()
  .addSingleton<BaseInterface>(Impl) // BROKEN !!!
  .addSingleton(BaseInterface, Impl) // works
```
