const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("provide age");
    } else if (req.query.age <= 18) {
        res.send("u don't have access");
    } else {
        next();
    }
}

app.use(reqFilter);

app.get("/", (req, res) => {
    res.send("Home page")
})
app.get("/users", (req, res) => {
    res.send("Users Page")
})

app.listen(5000);