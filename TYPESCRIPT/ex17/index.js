"use strict";
function foo(x) {
    return x[0];
}
let a = foo([4, 2]);
console.log(a);
function bar(x) {
    return x[0];
}
let b = bar([4, 2]);
let c = bar(['4', '2']);
console.log(b, c);
function baz(x) {
    return x - 1;
}
let d = baz(10);
function baq(x) {
    return x.length;
}
let e = baq(['100']);
