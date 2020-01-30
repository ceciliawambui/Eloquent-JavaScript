
const power = (base, exponent) => {
    let result = 1;
    for ( let count = 0;count < exponent; count ++){
        result *= base;
    }
    return result;
};
console.log(power(3, 3));
//expresses something like "this input(the parameters) produces the result(the body)"
const square2 = x => x * x;
console.log(square2(3));

const square3 = (x) => {return x * x;};
console.log(square3(4));