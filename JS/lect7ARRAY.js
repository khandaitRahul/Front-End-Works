//ARRAYS
// when we want to store multiple data in one variable at a time.
//var person = ["yudhistir", "arjun", "bheem", "nakul", "shahdev"];

// TRAVERSAL OF AN ARRAY
//used to navigate through an ARRAY
//if we want to get the single data at a time and also if we want
//to change the data
var person = ["yudhistir", "arjun", "bheem", "nakul", "shahdev"];
console.log(person[0]); //navigate to array index
console.log(person.length); //length of an array
console.log(person[person.length - 1]); //without lnwing the last array


//FOR LOOP
var Name = ["rahul", "vishal", "niraj", "mukul", "akhil", "shivam"];
for (var i = 0; i <= Name.length - 1; i++) {
  console.log(`my name is ${Name[i]}`);
}
//FOR IN LOOP
var Name = ["rahul", "vishal", "niraj", "mukul", "akhil", "shivam"];
for (let elements in Name) {
  console.log(elements); //this loop shows the index no. of all elements present in array
}

//FOR OF LOOP
var Name = ["rahul", "vishal", "niraj", "mukul", "akhil", "shivam"];
for (let elements of Name) {
  console.log(elements); //this loop shows all the values of all elements present in array
}

//FOR EACH LOOP
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
var NAME = ["rah", "vis", "nir", "muk", "akh", "shi", "nis"];
console.log(NAME.indexOf("vis", 2));

var NAME = ["rah", "vis", "nir", "muk", "akh", "shi", "nis"];
console.log(NAME.lastIndexOf("akh", 3));
