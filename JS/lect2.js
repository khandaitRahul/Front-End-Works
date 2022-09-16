// NaN
console.log("asd" - "cvu");

//for validation
var name = "web";
var num = 1234131;
console.log(isNaN(name));
console.log(isNaN(num))
if (isNaN(name)) {
  console.log(`enter valid mail`)
}

//Practice Ques
console.log(NaN === NaN);
console.log(Number.NaN === NaN);
console.log(isNaN(NaN));
console.log(isNaN(Number.NaN));
console.log(Number.isNaN(NaN));