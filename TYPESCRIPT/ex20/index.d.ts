declare let age: Age;
interface StringOnly {
    [key: string]: string;
}
declare let user: StringOnly;
interface MyType {
    'font-size': MyType | number;
}
declare let css: MyType;
