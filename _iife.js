/*An IIFE (Immediately Invoked Function
Expression) in JavaScript is a function
that executes immediately after being defined.
 It looks like this:*/

(function chai() {
  console.log("DB CONNECTED");
})(); //semicolon is required

/*  TODO actual defination 
It helps prevent global pollution by keeping
variables and functions inside its own scope,
avoiding conflicts with other global variables.
*/

(() => {
  console.log("DB CONNECTED 2");
})();

// passing argument in IIFE
((name) => {
  console.log(`Hello, ${name}!`);
})("Shahid");
