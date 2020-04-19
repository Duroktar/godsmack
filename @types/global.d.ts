interface StaticTestProps {
    describe: Mocha.SuiteFunction;
    it: Mocha.TestFunction;
    expect: Chai.ExpectStatic;
}

type ValueOf<T> = T[keyof T];

type Writeable<T> = { -readonly [P in keyof T]: T[P] };

type Type<T> = {
    new(...args: any[]): T;
}

type InferType<T> = T extends Type<infer U> ? U : never

type EmptyType = {
    __empty__: true;
};

declare namespace F {

    interface IValue<T> {
        type: 'value'
        value: T
    }

    interface IError<E extends Error> {
        type: 'error'
        error: E
    }

    type Result<T, E extends Error> = IValue<T> | IError<E>
}
