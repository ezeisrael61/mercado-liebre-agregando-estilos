const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
app.use(express.static("public"))

//app.get("/", (req, res) => {
//    res.send("hola")
//})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.listen(3000, () => 
console.log("servidor corriendo en puerto 3000"));