"use strict"

const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())
app.use(express.static("public"))

app.get("/", function (request, response) {
    res.send('index.html')
})

app.use("/login", require("./app/controller/loginController"))
app.use("/sales", require("./app/controller/saleController"))

const hostname = "localhost"
const port = 3000

app.listen(port, function () {
    console.log(`Server started: http://${hostname}:${port}`)
})