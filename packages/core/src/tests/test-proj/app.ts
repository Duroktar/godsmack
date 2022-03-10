import 'reflect-metadata';
import { Singleton, Injector } from "../../injector"

@Singleton()
class Test1 {
  constructor() { }
}

@Singleton()
class Test2 {
  constructor(public test1: Test1) { }
}

// @Service()
// class Test3 {
//   constructor(public test2: Test2, public test1: Test1) { }
// }

// @Singleton()
// class Test4 {
//   constructor(public test3: Test3, public test2: Test2, public test1: Test1) { }
// }

// @Service()
// class Test5 {
//   constructor(public test4: Test4, public test3: Test3, public test2: Test2, public test1: Test1) { }
// }

// @Service()
// class Test6 {
//   constructor(public test5: Test5, public test4: Test4, public test3: Test3, public test2: Test2, public test1: Test1) { }
// }

const injector = new Injector()

const t1 = injector.resolve<Test1>(Test1)
const t2 = injector.resolve<Test2>(Test2)

console.log(t1.constructor.toString());
console.log(t2.test1.constructor.toString());

console.log('equal?', t1.constructor.toString() === t2.test1.constructor.toString())
