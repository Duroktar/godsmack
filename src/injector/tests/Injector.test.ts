import { Injector } from "../Injector"
import { Service, Singleton } from '../decorators';

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
    constructor() { }
  }

  @Service()
  class Test4 {
    constructor(public test3: Test3) { }
  }

  describe('using Singleton services', () => {

    it('it resolves', () => {
      const injector = new Injector()

      const t1 = injector.resolve<Test1>(Test1)
      expect(t1).toBeInstanceOf(Test1)
    });

    it('it resolves properties', () => {
      const injector = new Injector()

      const t1 = injector.resolve<Test1>(Test1)
      const t2 = injector.resolve<Test2>(Test2)
      expect(t2.test1).toBeInstanceOf(Test1)
      expect(t2.test1).toBe(t1)
    });

    it('it creates', () => {
      const injector = new Injector()

      const t1 = injector.create<Test1>(Test1)
      expect(t1).toBeInstanceOf(Test1)
    });

    it('it reloads', () => {
      const injector = new Injector()

      const t1 = injector.resolve<Test1>(Test1)
      const t2 = injector.resolve<Test1>(Test1)
      expect(t1).toBe(t2)

      injector.reloadDependency(Test1)

      expect(t1).toBe(t2)

      const t3 = injector.resolve<Test1>(Test1)
      const t4 = injector.resolve<Test1>(Test1)
      expect(t3).toBe(t4)
      expect(t4).toBe(t4)

      expect(t1).not.toBe(t3)
      expect(t1).not.toBe(t4)
      expect(t2).not.toBe(t3)
      expect(t2).not.toBe(t4)
    });
  })

  describe('using Transient services', () => {

    it('it resolves', () => {
      const injector = new Injector()

      const t3 = injector.resolve<Test3>(Test3)
      expect(t3).toBeInstanceOf(Test3)
    });

    it('it resolves properties', () => {
      const injector = new Injector()

      const t3 = injector.resolve<Test3>(Test3)
      const t4 = injector.resolve<Test4>(Test4)
      expect(t4.test3).toBeInstanceOf(Test3)
      expect(t4.test3).not.toBe(t3)
    });

    it('it creates', () => {
      const injector = new Injector()

      const t3 = injector.create<Test3>(Test3)
      expect(t3).toBeInstanceOf(Test3)
    });

    it('it reloads', () => {
      const injector = new Injector()

      const t1 = injector.resolve<Test3>(Test3)
      const t2 = injector.resolve<Test3>(Test3)
      expect(t1).not.toBe(t2)

      injector.reloadDependency(Test3)

      const t3 = injector.resolve<Test3>(Test3)
      const t4 = injector.resolve<Test3>(Test3)
      expect(t3).not.toBe(t4)

      expect(t1).not.toBe(t3)
      expect(t2).not.toBe(t3)
      expect(t1).not.toBe(t4)
      expect(t2).not.toBe(t4)
    });
  })
})
