function foo2(x: number): number {
  return x * 2;
}
foo(1);
//foo("a");

function bar(x: number): void {
  x++;
}

bar(1);
//bar(); // 파라미터 미 입력시 에러
function bar2(x?: number): void {
  //x? -> number | undefined
  if (typeof x == 'number') {
    x++;
  }
}
bar2(1);
bar2(); //ok

function bar3(name?: string): void {
  if (typeof name === 'string') {
    console.log(`hello ${name}`);
  } else {
    console.log('no name');
  }
}

function count(n: string | number): number {
  return n.toString().length;
}

function marry(money: number, home: boolean, point: string): string {
  let total = 0;

  total += money;
  if (home) total += 500;
  if (point === '상') total += 100;

  if (total >= 600) return '결혼가능';
  return '';
}

console.log(marry(100, true, '상')); //
