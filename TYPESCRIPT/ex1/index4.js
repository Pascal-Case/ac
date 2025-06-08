"use strict";
function foo2(x) {
    return x * 2;
}
foo(1);
function bar(x) {
    x++;
}
bar(1);
function bar2(x) {
    if (typeof x == 'number') {
        x++;
    }
}
bar2(1);
bar2();
function bar3(name) {
    if (typeof name === 'string') {
        console.log(`hello ${name}`);
    }
    else {
        console.log('no name');
    }
}
function count(n) {
    return n.toString().length;
}
function marry(money, home, point) {
    let total = 0;
    total += money;
    if (home)
        total += 500;
    if (point === '상')
        total += 100;
    if (total >= 600)
        return '결혼가능';
    return '';
}
console.log(marry(100, true, '상'));
