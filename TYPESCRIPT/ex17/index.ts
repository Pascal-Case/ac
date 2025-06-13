function foo(x: unknown[]) {
  return x[0];
}

let a = foo([4, 2]);
console.log(a);

function bar<T>(x: T[]): T {
  return x[0];
}

let b = bar<number>([4, 2]);
let c = bar(['4', '2']);
console.log(b, c);

function baz<T extends number>(x: T) {
  return x - 1;
}

let d = baz<number>(10);

interface LengthCheck {
  length: number;
}

function baq<T extends LengthCheck>(x: T) {
  return x.length;
}

let e = baq<string[]>(['100']);
