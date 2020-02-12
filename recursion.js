function power(base, exponent){
    if (exponent == 0){
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(2, 0));
console.log(power(3, 2));
//It is okay for a function to call itself 
//as long as it does not do it often that it overflows the stack
//it is called a recursive function

function findSolution(target){
    function find(current, history){
        if (current == target){
            return history;
        } else if (current > target){
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                   find(current * 3, `${history} * 3`);
                   
        }
    }
    return find(1, "1");

}
console.log(findSolution(24));
