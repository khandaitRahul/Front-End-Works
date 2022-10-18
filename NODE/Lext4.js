const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "Files");

console.log("-->", dirPath);

// for (i = 0; i < 4; i++) {
//     fs.writeFileSync(dirPath + `/hello${i}.txt`, `test`);
// }

fs.readdir(dirPath, (err, Files) => {
    Files.forEach((d) => {
        console.log("file name is", d);
    })
})
