"use strict";
function foo(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
function foo2(x) {
    let array = [];
    array[0] = x;
    console.log(...array);
}
foo2(123);
foo2(12345);
function foo3(arr) {
    let result = [];
    for (const a of arr) {
        if (typeof a === "number") {
            result.push(a);
        }
        else {
            result.push(parseInt(a));
        }
    }
    return result;
}
foo3([1, "2", 3]);
function bar(teacher) {
    if (typeof teacher.subject === "string") {
        console.log(teacher.subject);
    }
    else {
        console.log(teacher.subject[teacher.subject.length - 1]);
    }
}
let t1 = { subject: 'math' };
let t2 = { subject: ['math', 'english'] };
let t3 = { hello: 'hi' };
bar({ subject: 'math' });
bar({ subject: ['science', 'art', 'korean'] });
