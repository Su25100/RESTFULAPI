const express = require('express');
const app = express();
const port = process.env.port || 3000;


app.post("/students", (req, res) => {

    res.send("hello guys!!");

})

app.listen()