class Person {
  _name: string;

  constructor(a: string) {
    this._name = a;
  }

  get getName() {
    return this._name;
  }

  set setName(a: string) {
    this._name = a;
  }

}

let person1 = new Person('lee');

person1.setName = 'jack';
console.log(person1.getName);




