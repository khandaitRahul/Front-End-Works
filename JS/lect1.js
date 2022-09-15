// first code in JS
console.log(`the value of this sum is ${1 + 2}`);
console.log(`the value of this sum is ${2 * 4}`);
console.log(`the value of this sum is ${4 / 2}`);

// values and variables
var myName = "rahul";
var myAge = 25;
console.log(`my name is ${myName} and my age is ${myAge * 2}`);

//check wether naming convention is right or not..??
// var _myName = "udit";
// var _1my_Name = "vaibhav";
// var 1myName = "yunus"; false
// var $myName = "dhiraj";
// var myName% = "rahul"; false

// DataTypes In JS
//six DataTypes that are primitives (acc. to ES6 & ES7 (till 2020))
// undefined: typeof instance === "undefined"
// var a = ;
// console.log(typeof (a));
// Boolean: typeof instance === "Boolean"
var c = true;
console.log(typeof (c))
// Number: typeof instance === "Number"
var a = 23;
console.log(typeof (a))
// String: typeof instance === "String"
var b = "qwerty";
console.log(typeof (b))
// BigInt: typeof instance === "BigInt"
// Symbol: typeof instance === "Symbol"

// Datatypes Practices
console.log(10 + "20");
console.log(9 - "4");
console.log("qwer" + "ty");
console.log("qwer" - "ty");
console.log(" " + " ");
console.log(" " + 0);
console.log(" " - 8);

//in JS 
//0 = false
//1 = true
console.log(true + true); // output : 2
console.log(true + false); // output : 1
console.log(false + true); // output : 1
console.log(false - true); // output : -1
