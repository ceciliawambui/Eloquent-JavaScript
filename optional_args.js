function square(x) {
    return x * x;
}
console.log(square(4,true, "book"));
//It ignores the extra arguments and computes the sqare of the first one
//if you pass too many, the extra ones are ignored
//if you pass too few the missing parameters get assigned the value undefined

function minus(a, b) {
    if (b === undefined) return - a;
    else return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));

function power(base, exponent = 2) {
    let result = 1;
    for(let count = 0; count < exponent; count ++){
        result *= base;
    }
    return result;
}
console.log(power(4));
console.log(power(2, 6))
//If you write an = operator after a parameter, followed by an expression,
// the value of that expression will replace the argument when it is not given.