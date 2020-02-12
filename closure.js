function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());
//local bindings are created a new for every call
//different calls can't trample on one another's local bindings
 function multiplier(factor) {
     return number => number * factor;
 }
 let twice = multiplier(2);
 console.log(twice(5));