let obj = { name: 'kim', age: 20 };
console.log(Object.keys(obj));

interface Person {
  age: number;
  name: string;
}

type PersonKeys = keyof Person;

let a: PersonKeys = 'age';

type Car = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
};

type newCar = TypeChanger<Car>;

// type Age<T> = T extends string ? string : unknown;

// let b: Age<string>;
// let c: Age<number>;

type FirstItem<T> = T;

type AA<T> = T extends (infer R)[] ? R : unknown;

type dd = AA<string[]>;

type ee = ReturnType<() => void>;

type Age<T> = T extends [string, ...any] ? T[0] : unknown;

let age1: Age<[string, number]>;
let age2: Age<[boolean, number]>;

type X<T> = T extends (x: infer R) => any ? R : any;
