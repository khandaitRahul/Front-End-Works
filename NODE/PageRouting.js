const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.join(__dirname, "Public");

// app.use(express.static(publicPath));
app.get("", (req, res) => {
    res.sendFile(`${publicPath}/about.html`)
})
app.get("/help", (req, res) => {
    res.sendFile(`${publicPath}/help.html`)
})


app.listen(5000);