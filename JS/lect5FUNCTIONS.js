//FUNCTION DEFINITIONS
//a JS Functions is a block of code that design to perform a particular Task.

//How To Write
//Name of a function, name of a function that define the function(FunctionName),
//enclosed in parentheses and then enclosed in curly brackets{}.
// function Sum() {
//   var a = 20, b = 10;
//   var total = a + b;
//   console.log(total);
// }
//calling a functions.
// Sum();


//function parameters and function Arguments.
function Sum(a, b) { //(a,b)Function Parameter
  var total = a + b;
  console.log(total);
}
Sum(3, 2) //(a,b)Function Arguments


//y we should use Functions ?
//define a code once, & reuse it many times, we can use
//the code many times with differnet arguments,

//follow DRY(Don't Repeat Your code) concept

//FUNCTION EXPRESSIONS
function Multiply(x, y) {
  var Total = x * y;
  console.log(Total);
}
var funExp = Multiply(4, 5);
funExp;


//RETURN KEYWORD
function Subtract(c, d) {
  return total = c - d;
}
var retKey = Subtract(10, 2);
console.log(retKey);

//ANONYMOUS FUNCTIONS & EXPRESSIONS
//functions without a name is known as anonymous functions.
//when a functions is declared with any name then it is known as 
//anonymous functions expressions.
var anFunExp = function (f) {
  return TOTAL = f ** 2;
}
var SQRT1 = anFunExp(9);
var SQRT2 = anFunExp(8);
console.log(`both the value is ${SQRT1} ${SQRT2}`);
console.log(SQRT1 < SQRT2);
