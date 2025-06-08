"use strict";
class Person {
    _name;
    constructor(a) {
        this._name = a;
    }
    get getName() {
        return this._name;
    }
    set setName(a) {
        this._name = a;
    }
}
let person1 = new Person('lee');
person1.setName = 'jack';
console.log(person1.getName);
