interface Square {
  color: string;
  width: number;
}

let square1: Square = { color: 'red', width: 100 };

interface Person {
  name: string;
}
interface Person {
  score: number;
}
interface Student extends Person {}
interface Teacher extends Person {
  age: number;
}
let std1: Student = { name: 'kim', score: 1 };
let tec1: Teacher = {
  age: 20,
  name: 'lee',
  score: 1,
};

type Animal = { name: string };
type Cat = { age: number } & Animal;
let cat1: Cat = {
  age: 12,
  name: 'Tom',
};
