const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "curd");
const filePath = `${dirPath}/fruit.txt`;


//to Create File
// fs.writeFileSync(filePath, "this is a simple text");


//to Read File
// fs.readFile(filePath, "utf8", (err, item) => {
//     console.log(item);
// })


//to Update File
// fs.appendFile(filePath, " file is updated", (err) => {
//     if (!err) console.log("Updated");
// })

//to Rename File
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if (!err) console.log("rename");
// })

//to Delete File
// fs.unlinkSync(filePath, (err) => {
//     if (!err) console.log("deleted");
// })









