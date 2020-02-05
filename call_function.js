function greet(who) {
    console.log("Hello" + who);
}
greet("Harry");
console.log("Bye");
//the call greet causes control jump to start of that function(line 2)
//the place where the computer stores this context is the call stack.
//Every time a function is called, the current context is stored on top of this stack
function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
console.log(chicken() + "came first.")