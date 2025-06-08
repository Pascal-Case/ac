type Foo = (a: string) => number;
declare const foo: Foo;
declare function bar(fn: Foo): void;
declare let memberInfo: {
    name: string;
    foo(a: number): number;
    bar: (a: string) => void;
};
declare function baz(cb: Foo): void;
type CutZero = (a: string) => string;
type RemoveDash = (a: string) => number;
declare const cutZero: CutZero;
declare const removeDash: RemoveDash;
declare const bauz: (a: string, cb1: CutZero, cb2: RemoveDash) => number;
declare const res: number;
