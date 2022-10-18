const express = require("express");
const app = express();


app.get("", (req, res) => {
    res.send(`
    <h1>HomePage</h1>
    <input type="text" placeholder="${req.query.name}/>
    `)
})



app.listen(5000);