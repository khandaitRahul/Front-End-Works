//expressions and operators

//AssignMent Operators 
//the simple assignment operators is eqaul (=)
console.log("Assignment Operator")
var x = 3;
var y = 3;
console.log(x == y);
console.log("the value is :" + x == y); //bug
// template literals (ES6)
console.log(`the value is : ${x == y}`)

//Arithmetic Operators
console.log("Arithemetic Operator");
console.log(2 + 2);
console.log(3 - 2);
console.log(2 * 3);
console.log(6 / 2);
console.log(`Remainder Operator : ${6 % 5}`);
//increment & decrement operator 
//(prefix operator(++X or --X) && postfix operator(X++ or X--))
var n = 10;
var nw = ++n + 5;
console.log(n);
console.log(nw);

//Comparison Operators
console.log(`Comparison Operator`)
var a = 30;
var b = 40;
//equal (==)
console.log(a == b);
//Not Equal (!=)
console.log(a != b);
//Greater than and equal to
console.log(a > b);
console.log(a >= b);
//Smaller than and equal to
console.log(a < b);
console.log(a <= b);

//Logical Operators
console.log(`Logical Operators`)
var c = 10;
var d = -20;
//logical AND(&&) operator 
console.log(c > d && d > 0);
console.log(c > d && c > 0 && d < 0 && d > -50);
//logical OR(||) operator
console.log(c < d || c < 0 || d > 0 || d < -50);
//Logical NOT(!)
console.log(!(a > 0 || b < 0));
console.log(!(false));

//String Concatenation Operator
console.log(`String Operator`);
console.log("hello" + "world");
console.log("10" + 20);

//Practices
console.log(3 ** 3); //3*3*3(Exponential Operator)
console.log(20 + "qwe");
console.log(50 - "20");//bug in JS

//WAP to Swap 2 no.
var a = 2;
var b = 4;

var c = b;
b = a;
a = c;
console.log(`the value is : ${a} ${b}`);

//WAP to Swap 2 no. without using third variable.
var x = 10;
var y = 20;

x = x + y;
y = x - y;
x = x - y;
console.log(`the value is : ${x}, ${y}`)

//Difference between == vs ===
var num1 = 5;
var num2 = "owl";
console.log(num1 == num2);
console.log(typeof (num1 === num2));

//Conditional(ternary) Operator
