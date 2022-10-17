const App = require("./App");
const fs = require("fs");
const http = require("http");



console.log(App.name)
console.log(App.norFunc())

// var x = '20';
// if (x === 20) {
//     console.log("match");
// } else {
//     console.log("not matched");
// }

// var y = 5;
// for (i = 0; i <= y; i++) {
//     console.log(i);
// }

// const arr = [2, 4, 6, 8, 10, 12, 14, 6];
// console.log(arr[3]);

// let fil = arr.filter((d) => {
//     return (d >= 10);
// })
// console.log(fil);

fs.writeFileSync("test2.txt", "this is only for test");
console.log("-->", __dirname);//to check the directory name with path
console.log("-->", __filename);//to check the file name with path

http.createServer((req, res) => {
    res.write("<h1>hello</h1>");
    res.end();
}).listen(4500);









