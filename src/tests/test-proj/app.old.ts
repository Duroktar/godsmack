import 'reflect-metadata';
import { Container, Singleton } from "../../injector";

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
    // private wolf: Wolf,
    // private dog: Dog,
    private cat: Cat,
    private wolf: WolfType,
    private dog: DogType,
    // private cat: CatType,
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
  .addSingleton<CatType>(FeralCat)
  // .addSingleton<DogType>(FeralDog)
  // .addSingleton<WolfType>(FeralWolf)
  // .addSingleton<CatType>(Cat)
  .addSingleton<DogType>(Dog)
  .addSingleton<WolfType>(Wolf)
  .addSingleton<IMutantAnimal>(MutantAnimal)

console.log('container', container)
const mutant = container.resolve<IMutantAnimal>()

console.log('mutant bark', mutant.bark())
