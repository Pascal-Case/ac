class User {
  public _name = 'lee';
  private _age = 20;
  constructor(a: string, b: number) {
    this._name = a;
    this._age = b;
  }

  get age() {
    return this._age;
  }
}

let user1 = new User('park', 10);
user1._name = 'yang';
console.log(user1.age);

console.log(user1);
