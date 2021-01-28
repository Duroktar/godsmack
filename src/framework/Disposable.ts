
export const SYMBOL_DISPOSABLE = Symbol.for('DISPOSE')

interface DisposableResource {
  dispose: () => (void | Promise<void>);
}

export const Disposable = new class {
  async Dispose(target: any) {
    if (Disposable.Is(target)) {
      await target.dispose()
    }
  }
  Is(target: any): target is DisposableResource {
    const disposeFunc = (target as any)?.dispose;
    return typeof disposeFunc === 'function';
  }
}
