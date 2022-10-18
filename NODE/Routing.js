const express = require("express");
const app = express();


app.get("", (req, res) => {
    res.send("hello, HomePage");
})
app.get("/about", (req, res) => {
    res.send("About us page")
})
app.get("/help", (req, res) => {
    res.send("help page")
})

app.listen(5000); 