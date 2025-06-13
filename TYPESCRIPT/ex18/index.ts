let var1: [string, boolean?, number?] = ['dog'];

function foo(...x: [number, string]) {
  console.log(x);
}

foo(1, '1');

let var2: [string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true];

function bar(x: number, y: boolean, ...z: (number | string)[]) {
  console.log(x, y, z);
}

function baz(...x: (string | number)[]): [string[], number[]] {
  let arr1: string[] = [];
  let arr2: number[] = [];

  x.forEach((n) => {
    if (typeof n === 'string') arr1.push(n);
    else arr2.push(n);
  });

  return [arr1, arr2];
}
