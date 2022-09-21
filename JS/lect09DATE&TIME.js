//DATE and TIME

//there are 4 ways to create a new date objects :
//new Date()
let currDate = new Date();
console.log(currDate);
console.log(currDate.toLocaleString());
console.log(currDate.toString());

//Date.now() 
var d = Date.now();
console.log(d);
let oldDate = new Date(1663650054443);
console.log(oldDate.toLocaleString());

//DATE METHODS (get the indiviual date)
console.log("DATE METHODS (GET THE INDIVIUAL DATE)");
const DATE = new Date();
console.log(DATE.toLocaleString());
console.log(DATE.getFullYear());
console.log(DATE.getMonth());
console.log(DATE.getDate());
console.log(DATE.getDay());

//set the indiviual date
console.log("DATE METHODS (SET THE INDIVIUAL DATE)");
console.log(DATE.setFullYear(2024));
console.log(DATE.setFullYear(2024, 10, 5));
console.log(DATE.setMonth(10));
console.log(DATE.setDate(5));
console.log(DATE.toLocaleString());

//TIME METHODS 
console.log("TIME METHODS (get methods)");
const currTime = new Date();
console.log(currTime);
console.log(currTime.getTime());
console.log(currTime.getHours());
console.log(currTime.getMinutes());
console.log(currTime.getSeconds());
console.log(currTime.getMilliseconds());

//set the indiviual time
console.log("TIME METHODS (set methods)");
let setTime = new Date();
// console.log(setTime.setTime());
console.log(setTime.setHours(23));
console.log(setTime.setMinutes(43));
console.log(setTime.setSeconds(25));
console.log(setTime.setMilliseconds(120));

//PRACTICES
console.log("PRACTICES");
console.log(new Date().toLocaleTimeString()); //to show only the time
console.log(new Date().toLocaleDateString()); //to show only the time
console.log(new Date().toLocaleString()); //to show both time and date

