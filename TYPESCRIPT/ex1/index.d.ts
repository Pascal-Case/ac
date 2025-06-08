declare let 이름: string[];
declare let 이름2: {
    name?: string;
};
declare let name2: string | number;
type Name = string | number;
declare let name3: Name;
declare function foo(x: number): number;
type Member = [number, boolean];
declare let john: Member;
type Member2 = {
    [key: string]: string;
};
declare let jack: Member2;
declare class User2 {
    name: string;
    constructor(name: string);
}
