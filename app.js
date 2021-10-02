const express = require('express')

const app = express()

const userRouter = require("./route/user.router.js")

app.use("/api/user", userRouter)


app.use("/register", (req, res) =>{

    res.statusCode = 200,
    res.sendFile(__dirname + "/views/register.html")
 
})

app.use("/login", (req, res) =>{

    res.send("This is a login page for to login")
} )

app.use("/", (req, res) =>{

    res.statusCode = 200,
    res.sendFile(__dirname+ "/views/index.html")
})



app.use((req,res) =>{

    res.send("400!!! Page Not Found")
})

module.exports = app;

