interface Square {
    color: string;
    width: number;
}
declare let square1: Square;
interface Person {
    name: string;
}
interface Person {
    score: number;
}
interface Student extends Person {
}
interface Teacher extends Person {
    age: number;
}
declare let std1: Student;
declare let tec1: Teacher;
type Animal = {
    name: string;
};
type Cat = {
    age: number;
} & Animal;
declare let cat1: Cat;
