let name1: 'kim'; //literal type
//name1 = 'yang';

function foo(name: '상' | '중' | '하') {
  let arr: ('상' | '중' | '하')[] = [];
  arr.push(name);
  console.log(...arr);
  return arr;
}

foo('상');
foo('중');
foo('하');

let data = {
  name: 'kim'
} as const;

function bar(a: 'kim') {
  console.log(a);
}

bar(data.name);