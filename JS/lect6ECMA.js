//1996 - JS was created
//1997 - 1st ECMA Script was introduced

//2014 - useStrictMode was introduced
//2015 - 6th edition ES6 was introduced

//features of ES6

// let and const

//LET vs COSNT vs VAR
//VAR => Function Scope
//VAR => we can redeclare it values with same variable name. 
var myName = "rahul";
console.log(myName);
myName = "luhar";
console.log(myName);

//VAR is a Function Scope
function data() {
  var fname = "rahul";
  console.log(fname);
  if (true) {
    var lname = "khandait";
    console.log(fname + lname);
  }
  console.log(lname + fname);
}
data();
//LET & CONST => Block Scope
//LET => we can redeclare it values with same variable name.
//CONST => we can't redeclare it values with same variable name.

// template literals
console.log(`the square of 8 is ${8 ** 2}`)
// default arguments
function Mult(a, b = 5) {
  return a * b;
}
console.log(Mult(2, 6));

// destructing
// object properties

// arrow functions
const Sum = (e, f) => {
  return `the sum is ${e + f}`;
}
console.log(Sum(6, 9));

// rest operators
// spread operators


