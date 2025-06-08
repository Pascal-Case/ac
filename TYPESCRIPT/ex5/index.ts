function foo(x: number | string) {
  if (typeof x === 'string') {
    return x + '1';
  } else {
    return x + 1;
  }
}

function foo2(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
  console.log(...array);
}

foo2(123);
foo2(12345);

function foo3(arr: (string | number)[]): number[] {
  let result: number[] = [];

  for (const a of arr) {
    if (typeof a === "number") {
      result.push(a);
    } else {
      result.push(parseInt(a))
    }
  }

  //console.log(...result)
  return result;
}

foo3([1, "2", 3])

type TEACHER = {
  subject: string | string[]
}

function bar(teacher: TEACHER): void {
  if (typeof teacher.subject === "string") {
    console.log(teacher.subject);
  } else {
    console.log(teacher.subject[teacher.subject.length - 1])

  }
}

let t1 = {subject: 'math'};
let t2 = {subject: ['math', 'english']}
let t3 = {hello: 'hi'}

bar({subject: 'math'})  //이 경우 'math'를 return
bar({subject: ['science', 'art', 'korean']}) //이 경우 'korean'을 return
//bar( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다