declare function foo(x: number | string): string | number;
declare function foo2(x: number | string): void;
declare function foo3(arr: (string | number)[]): number[];
type TEACHER = {
    subject: string | string[];
};
declare function bar(teacher: TEACHER): void;
declare let t1: {
    subject: string;
};
declare let t2: {
    subject: string[];
};
declare let t3: {
    hello: string;
};
