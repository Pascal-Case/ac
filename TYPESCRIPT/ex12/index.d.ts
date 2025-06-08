declare function foo(name: string, ...a: number[]): void;
declare let var1: string, var2: number;
declare let age: number, student: boolean;
declare let obj: {
    student: boolean;
    age: number;
};
declare function bar({ student, age }: {
    student: boolean;
    age: number;
}): void;
declare function baz(...n: number[]): number;
declare function bak({ user, comment, admin }: {
    user: string;
    comment: number[];
    admin: boolean;
}): void;
declare function baq(a: (number | string | boolean)[]): void;
