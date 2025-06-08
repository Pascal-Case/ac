type Foo = (a: string) => number;

const foo: Foo = (a) => {
  return a.length;
};
foo('abc');

function bar(fn: Foo) {
  console.log(fn('hello world!'));
}

bar(foo);

let memberInfo = {
  name: 'lee',
  foo(a: number): number {
    return a + 1;
  },
  bar: (a: string): void => {
    console.log(a);
  }
};
memberInfo.foo(123);

function baz(cb: Foo) {
  const result = cb('Test');
  console.log(result);
}

baz(foo);

type CutZero = (a: string) => string;
type RemoveDash = (a: string) => number;

const cutZero: CutZero = (a: string): string => {
  return a.replace(/^0+/, '');
};

const removeDash: RemoveDash = (a: string): number => {
  return parseInt(a.replace(/-/g, ''));
};

console.log(cutZero('0asdf'));
console.log(removeDash('123-456-789'));

const bauz = (a: string, cb1: CutZero, cb2: RemoveDash): number => {
  return cb2(cb1(a));
};

const res = bauz('010-1234-5678', cutZero, removeDash);

console.log(res);