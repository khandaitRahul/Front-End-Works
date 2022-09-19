//ARRAYS
// when we want to store multiple data in one variable at a time.
//var person = ["yudhistir", "arjun", "bheem", "nakul", "shahdev"];

// TRAVERSAL OF AN ARRAY
//used to navigate through an ARRAY
//if we want to get the single data at a time and also if we want
//to change the data
console.log("TRAVERSAL OF AN ARRAY");
var person = ["yudhistir", "arjun", "bheem", "nakul", "shahdev"];
console.log(person[0]); //navigate to array index
console.log(person.length); //length of an array
console.log(person[person.length - 1]); //without lnwing the last array


//FOR LOOP
console.log("FOR LOOP");
var Name = ["rahul", "vishal", "niraj", "mukul", "akhil", "shivam"];
for (var i = 0; i <= Name.length - 1; i++) {
  console.log(`my name is ${Name[i]}`);
}
//FOR IN LOOP
console.log("FOR IN LOOP");
var Name = ["rahul", "vishal", "niraj", "mukul", "akhil", "shivam"];
for (let elements in Name) {
  console.log(elements); //this loop shows the index no. of all elements present in array
}

//FOR OF LOOP
console.log("FOR OF LOOP");
var Name = ["rahul", "vishal", "niraj", "mukul", "akhil", "shivam"];
for (let elements of Name) {
  console.log(elements); //this loop shows all the values of all elements present in array
}

//FOR EACH LOOP
console.log("FOR EACH LOOP");
var Name = ["rahul", "vishal", "niraj", "mukul", "akhil", "shivam"];
Name.forEach(function (element, index, array) {
  console.log(element, index);
});

var Name = ["rahul", "vishal", "niraj", "mukul", "akhil", "shivam"];
Name.forEach((element, index, array) => {
  console.log(element, index, array);
})

//SEARCHING AND FILTER IN AN ARRAY
//Array.prototype.indexOf()
console.log("INDEX OF");
var NAME = ["rah", "vis", "nir", "muk", "akh", "shi", "nis"];
console.log(NAME.indexOf("vis", 2));

var NAME = ["rah", "vis", "nir", "muk", "akh", "shi", "nis"];
console.log(NAME.lastIndexOf("akh", 3));

//Array.prototype.includes()
console.log("INCLUDES");
var NAME = ["rah", "vis", "nir", "muk", "akh", "shi", "nis", "nir"];
console.log(NAME.includes("nir"));

//Array.prototype.find()
console.log("FIND");
const prices = [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 400, 700, 200, 600];
const findElm = prices.find((element, index) => {
  return element > 1300;
});
console.log(findElm);

//Array.prptotype.findIndex()
console.log("FIND INDEX");
const price = [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 400, 700, 200, 600];
// const findElments = price.findIndex((element, index) => {
//   return element < 300;
// });
console.log(price.findIndex((element) => element > 1300));

//Array.prototype.filter()
console.log("FILTER");
const PRICES = [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 400, 700, 200, 600];
const newPrice = PRICES.filter((element, index) => {
  return element > 1400;
})
console.log(newPrice);

//Array.prototype.sort()
console.log("SORT");
const months = ["jan", "feb", "apr", "dec", "mar", "jun", "jul", "sept", "oct", "aug", "nov"]
console.log(months.sort());

const num = [100, 34, 66, 76, 23, 44, 85, 77];
console.log(num.sort());

//CRUD APPLICATION
//Array.prototype.push()
console.log("PUSH");
const animals = ["pig", "goats", "sheep", "cow"]
const count = animals.push("chicken", "dog");
console.log(count);
console.log(animals);

//Array.prototype.unshift()
console.log("UNSHIFT");
const ANIMALS = ["pig", "goats", "sheep", "cow"];
const COUNT = ANIMALS.unshift("chicken", "dog", "cat");
console.log(COUNT);
console.log(ANIMALS);

const myNum = [1, 4, 2, 6, 9];
myNum.unshift(3, 8)
console.log(myNum);

let name = new String("qwerty")
//Array.prototype.pop()
console.log("POP");
const plants = ["brocolli", "cauliflower", "tomato", "brinjal", "potato"];
plants.pop();
console.log(plants)

//Array.prototype.shift
console.log("SHIFT");
const veggie = ["brocolli", "cauliflower", "tomato", "brinjal", "potato"];
veggie.shift();
console.log(veggie);



//PRACTICES 
//(do all operation using one method)
const month = ["jan", "feb", "mar", "apr", "jun", "jul", "oct"];

//1.what is the return value of splice method
//sol-1
//splice method return an empty array when no value of an array is deleted
//if we deleted some value it will show that value in place of empty array

//2.add "dec" to last index
//sol-2
const newMonths = month.splice(month.length, 0, "dec");
console.log(month);

//3.update march to MARCH (update)
//sol-3
const indexOfMonth = month.indexOf("mar");
if (indexOfMonth !== -1) {
  const updateMonth = month.splice(indexOfMonth, 1, "MAR")
} else {
  console.log(`no such data found`);
}
console.log(month)

//4.delete june from an array
const indexOfMnth = month.indexOf("jun");
if (indexOfMnth !== -1) {
  const deleteMonth = month.splice(indexOfMnth, 1)
  console.log(deleteMonth);
} else {
  console.log(`no such data found`);
}
console.log(month);

const indOfMonth = month.indexOf("apr");
if (indOfMonth !== -1) {
  const delMonth = month.splice(indOfMonth, Infinity)
  console.log(delMonth);
} else {
  console.log(`no such data found`);
}
console.log(month);


//MAP(), REDUCE(), FILTER()
//Map() and Reduce() METHOD

//Array.prototype.map()
console.log("MAP");
const arr = [1, 4, 2, 7, 9, 5, 8, 3]; //print num > 5
let arr1 = arr.map((element, index) => {
  return element > 5
})
console.log(arr, arr1); //map() returns a new array with results of same elements calling in an array

let arr2 = arr.map((data, index, array) => {
  return `the index no.${index} and the value is ${data} belong to this ${array}`;
})
console.log(arr2);

//PRACTICES
//1. find the sq.root of each element in an array
let numbers = [25, 36, 49, 64, 81];
let sqNum = numbers.map((data, index) => {
  return `the sqaure root of ${data} is ${Math.sqrt(data)} belong to index no.${index}`
})
console.log(sqNum)


//2. multiply each element by 2 and return only those elements which
//are greater than 10
let NUMBER = [2, 3, 4, 5, 6, 8, 9]
let mulNum = NUMBER.map((d, i) => {
  return d * 2;
}).filter((d, i) => {
  return d >= 10;
}).reduce((a, d, i) => {
  return a += d;
})
console.log(mulNum);

//REDUCE()
console.log("REDUCE");
let no = [1, 3, 5, 7, 9, 2, 6,];
let sum = no.reduce((accumulator, elements, index, array) => {
  debugger;
  return accumulator += elements;
}, 7)
console.log(sum);


//how to FLATTEN an ARRAY
//converting 2d and 3d array into 1d array
const ARRAY = [
  ["Z1", "Z2"],
  ["Z3", "Z4"],
  ["Z5", "Z6"],
  ["Z7", "Z8"]
];

let flatArr = ARRAY.reduce((a, e, i) => {
  return a.concat(e);
})
console.log(flatArr);

