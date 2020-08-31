import { Singleton } from '../index';
import { Service, DefaultInjector } from '../injector';

describe('Injector Class', () => {

  @Singleton()
  class Test1 {
    constructor() { }
  }

  @Singleton()
  class Test2 {
    constructor(public test1: Test1) { }
  }

  @Service()
  class Test3 {
    constructor(public test2: Test2, public test1: Test1) { }
  }

  @Singleton()
  class Test4 {
    constructor(public test3: Test3, public test2: Test2, public test1: Test1) { }
  }

  @Service()
  class Test5 {
    constructor(public test4: Test4, public test3: Test3, public test2: Test2, public test1: Test1) { }
  }

  @Service()
  class Test6 {
    constructor(public test5: Test5, public test4: Test4, public test3: Test3, public test2: Test2, public test1: Test1) { }
  }

  it('it works with singletons.', () => {
    const t1 = DefaultInjector.resolve<Test1>(Test1)
    const t2 = DefaultInjector.resolve<Test2>(Test2)
    expect(t1).toEqual(t2.test1)
  });

  it('it works with instances.', () => {
    const t5_1 = DefaultInjector.resolve<Test5>(Test5)
    const t5_2 = DefaultInjector.resolve<Test5>(Test5)
    expect(t5_1).toEqual(t5_2)
  });

  it('it works with both together.', () => {
    const t1 = () => DefaultInjector.resolve<Test1>(Test1)
    const t2 = DefaultInjector.resolve<Test2>(Test2)
    const t3 = () => DefaultInjector.resolve<Test3>(Test3)
    const t4 = DefaultInjector.resolve<Test4>(Test4)
    const t5 = () => DefaultInjector.resolve<Test5>(Test5)
    const t6 = DefaultInjector.resolve<Test6>(Test6)

    expect(t1()).toEqual(t2.test1)
    expect(t1()).toEqual(t3().test1)
    expect(t1()).toEqual(t4.test1)
    expect(t1()).toEqual(t5().test1)
    expect(t1()).toEqual(t6.test1)

    // expect(t3()).not.toEqual(t4.test3)
    // expect(t3()).not.toEqual(t5().test3)
    // expect(t3()).not.toEqual(t6.test3)
    // expect(t5()).not.toEqual(t6.test5)
  });
})
