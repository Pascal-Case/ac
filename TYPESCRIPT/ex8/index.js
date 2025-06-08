"use strict";
const foo = (a) => {
    return a.length;
};
foo('abc');
function bar(fn) {
    console.log(fn('hello world!'));
}
bar(foo);
let memberInfo = {
    name: 'lee',
    foo(a) {
        return a + 1;
    },
    bar: (a) => {
        console.log(a);
    }
};
memberInfo.foo(123);
function baz(cb) {
    const result = cb('Test');
    console.log(result);
}
baz(foo);
const cutZero = (a) => {
    return a.replace(/^0+/, '');
};
const removeDash = (a) => {
    return parseInt(a.replace(/-/g, ''));
};
console.log(cutZero('0asdf'));
console.log(removeDash('123-456-789'));
const bauz = (a, cb1, cb2) => {
    return cb2(cb1(a));
};
const res = bauz('010-1234-5678', cutZero, removeDash);
console.log(res);
