function square(x) {
    return x * x;
}
console.log(square(10));
//shorter way of creating function binding
//does not require semiclon after the function
console.log("The future says:", future());
function future(){
    return "You'll never have flying cars";
}
//there is freedom of order when declaring functions
 