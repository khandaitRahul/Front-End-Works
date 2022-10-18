const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("Profile");
})

app.listen(5000);