// Type Narrowing
function sfunction(x) {
    if (typeof x === 'number') {
        return x + 1;
    }
    else if (typeof x === 'string') {
        return x + 1;
    }
    else {
        return 0;
    }
}
//Type Assertion
function functions(x) {
    return x + 1;
}
console.log(functions(123));
