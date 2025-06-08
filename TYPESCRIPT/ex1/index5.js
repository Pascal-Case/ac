"use strict";
function foo3(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
function foo5(x) {
    let array = [];
    array[0] = x;
    console.log(...array);
}
foo5(123);
foo5(12345);
