function foo3(x: number | string) {
  if (typeof x === 'string') {
    return x + '1';
  } else {
    return x + 1;
  }
}

function foo5(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
  console.log(...array);
}

foo5(123);
foo5(12345);
