const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get("/home", (req, res) => {
    res.send("hello  developers!!");
})
app.post("/students", (req, res) => {

    res.send("hello guys!!");

})

app.listen(port, () => {

    console.log(`connection successfull!! at ${port}`);
})