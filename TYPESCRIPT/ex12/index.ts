function foo(name: string, ...a: number[]) {
  console.log(name, a);
}

foo('lee', 1, 2, 3, 4, 5);

let [var1, var2] = ['hello', 100];

let { age, student } = { student: true, age: 20 };

let obj = { student: true, age: 20 };
function bar({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}
bar({ student: true, age: 20 });

function baz(...n: number[]) {
  let max = -1;
  for (let num of n) {
    if (num > max) max = num;
  }
  return max;
}

console.log(baz(1, 234, 2134, 1234, 5, 45, 345, 36, 456, 456, 45, 6));

function bak({ user, comment, admin }: { user: string; comment: number[]; admin: boolean }) {
  console.log(user, ...comment, admin);
}

bak({ user: 'kin', comment: [1, 2, 3], admin: false });

function baq(a: (number | string | boolean)[]) {
  console.log(...a);
}

baq([40, 'wine', false]);
