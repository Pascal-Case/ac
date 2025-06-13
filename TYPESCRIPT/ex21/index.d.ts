declare let obj: {
    name: string;
    age: number;
};
interface Person {
    age: number;
    name: string;
}
type PersonKeys = keyof Person;
declare let a: PersonKeys;
type Car = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
type TypeChanger<MyType> = {
    [key in keyof MyType]: string;
};
type newCar = TypeChanger<Car>;
type FirstItem<T> = T;
type AA<T> = T extends (infer R)[] ? R : unknown;
type dd = AA<string[]>;
type ee = ReturnType<() => void>;
type Age<T> = T extends [string, ...any] ? T[0] : unknown;
declare let age1: Age<[string, number]>;
declare let age2: Age<[boolean, number]>;
type X<T> = T extends (x: infer R) => any ? R : any;
