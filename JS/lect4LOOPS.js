//CONTROL STATEMENT AND LOOPS

//If-Else statement
console.log("IF-ELSE STATEMENT");
var tomorrow = "sunny";
if (tomorrow == "rain") {
  console.log("take raincoat");
} else {
  console.log(`Don't take raincoat`);
}

//Practices WAP to check wether it is a leap year or not
var year = 2020;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year} is a leap year`);
    } else {
      console.log("it is not a leap year")
    }
  } else {
    console.log("it is a leap year");
  }
} else {
  console.log("it is not a leap year");
}

//there are 5 false value(0,"",undefined,null,NaN) in JS 
if (score = 0) {
  console.log("we lose the game");
} else {
  console.log("we won the game")
}

//Conditional Ternany Operator
//the conditional ternary operator is the only JS operator that
//takes three operands
var age = 16;
// if (age >= 18) {
//   console.log("u can vote");
// } else {
//   console.log("u can't vote");
// }
console.log((age >= 18) ? "u can vote" : "u can't vote"); //short version of if-else statement

//WAP to find area of circle,triangle,rectangle
var area = "rectangle";
var pi = 3.142, l = 10, b = 5, r = 3;
if (area == "circle") {
  console.log(`the area is ${pi * r ** 2}`);
} else if (area == "triangle") {
  console.log(`the area is ${(l * b) / 2}`);
} else if (area == "rectangle") {
  console.log(`the area is ${l * b}`);
} else {
  console.log("enter valid data");
}

//SWITCH STATEMENT
//data has taken from line 46,47
console.log("SWITCH STATEMENT");
switch (area) {
  case "circle":
    console.log(`the area is ${pi * r ** 2}`);
    break;

  case "triangle":
    console.log(`the area is ${(l * b) / 2}`);
    break;

  case "rectangle":
    console.log(`the area is ${l * b}`);
    break;

  default:
    console.log(`enter valid data`);
}

//WHILE LOOP STATEMENT
//the while statement create a loop that executes a specified
//statement as long as the test condition evaluates to true.
console.log("WHILE LOOP STATEMENT");
var num = 20;
while (num <= 10) {
  ++num;
  console.log(num); //infinite loop
}

//DO-WHILE LOOP STATEMENT
var num = 20;
do {
  ++num;
  console.log(num);
} while (num <= 10);

//FOR LOOP
console.log("FOR LOOP")
for (var number = 0; number <= 5; number++) {
  debugger;
  console.log(number);
}

//Practices WAP to print table for given no.(8,9,12,15) using for loop
for (var no = 1; no <= 10; no++) {
  var tableOf = 9;
  debugger;
  console.log(`9x${no}=${tableOf * no}`)
}
