type Fish = { swim: string };
type Bird = { fly: string };

function foo(animal: Fish | Bird) {
  if ('swim' in animal) {
  }
}

class Person {
  name: string;
  age: number;
  constructor(a: string, b: number) {
    this.name = a;
    this.age = b;
  }
}

type Car = {
  wheel: '4';
  color: string;
};

type Bike = {
  wheel: '2';
  color: string;
};

function bar(x: Car | Bike) {
  if (x.wheel === '4') {
    console.log(`${x} is Car type`);
  }
}

function baz(param: string) {
  if (typeof param == 'string') {
    console.log(param);
  } else {
    console.log(param); // never
  }
}

let baz2 = function () {
  throw new Error();
};
