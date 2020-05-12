
export const SYMBOL_DISPOSABLE = Symbol.for('DISPOSE')

interface DisposableResource {
  dispose: () => void;
}

export const Disposable = new class {
  Dispose(target: any) {
    if (Disposable.Is(target)) {
      target.dispose()
    }
  }
  Is(target: any): target is DisposableResource {
    const disposeFunc = (target as any)?.dispose;
    return typeof disposeFunc === 'function';
  }
}
