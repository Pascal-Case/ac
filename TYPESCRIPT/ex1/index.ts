let 이름: string[] = ['kim'];

let 이름2: { name?: string } = { name: 'kim' };

let name2: string | number = 'kim';

type Name = string | number;
let name3: Name = 'yang';

function foo(x: number): number {
  return x * 2;
}

type Member = [number, boolean];
let john: Member = [1, true];

type Member2 = {
  [key: string]: string;
};

let jack: Member2 = {
  name: 'jack',
  age: '12',
};

class User2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
