"use strict";
let var1 = ['dog'];
function foo(...x) {
    console.log(x);
}
foo(1, '1');
let var2 = ['동서녹차', 4000, true, false, true, true, false, true];
function bar(x, y, ...z) {
    console.log(x, y, z);
}
function baz(...x) {
    let arr1 = [];
    let arr2 = [];
    x.forEach((n) => {
        if (typeof n === 'string')
            arr1.push(n);
        else
            arr2.push(n);
    });
    return [arr1, arr2];
}
