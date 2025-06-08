"use strict";
let name1;
function foo(name) {
    let arr = [];
    arr.push(name);
    console.log(...arr);
    return arr;
}
foo('상');
foo('중');
foo('하');
let data = {
    name: 'kim'
};
function bar(a) {
    console.log(a);
}
bar(data.name);
