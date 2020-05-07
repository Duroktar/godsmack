
export const SYMBOL_DISPOSABLE = Symbol.for('DISPOSE')

interface DisposableResource {
  [SYMBOL_DISPOSABLE]: () => void;
}

export const Disposable = new class {
  Dispose(target: unknown) {
    if (Disposable.Is(target)) {
      target[SYMBOL_DISPOSABLE]()
    }
  }
  Wrap<T extends any>(target: T): T {
    target[SYMBOL_DISPOSABLE] = () => { };
    return target;
  }
  Is(target: any): target is DisposableResource {
    return typeof target?.[SYMBOL_DISPOSABLE] === 'function';
  }
}
