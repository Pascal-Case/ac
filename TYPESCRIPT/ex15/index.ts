class User {
  protected x = 10;
  static y = 20;
  private static z = 10;

  static getY() {
    return this.y;
  }

  static getZ() {
    return this.z;
  }
}

class NewUser extends User {
  getX() {
    return this.x;
  }
}

let h = new NewUser();
console.log(h.getX(), User.getY(), NewUser.getY());

class Foo {
  private static x = 10;

  static addOne(a: number) {
    this.x += a;
  }

  static printX() {
    console.log(this.x);
  }
}

Foo.addOne(3);
Foo.addOne(4);
Foo.printX();

class Square {
  constructor(public w: number, public h: number, public color: string) {}

  draw() {
    const div = document.getElementById('d');

    const square = document.createElement('div');
    square.style.width = this.w.toString();
    square.style.height = this.h.toString();
    square.style.backgroundColor = this.color;

    console.log(div);
  }
}
