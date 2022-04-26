//////////////   Routing  Basics /////////////////

const express = require("express");   // express actually aa methode
const app= express();
const http = require("http")

// const server = http.createServer((req,res)=>{
//     if(req.url === "/"){
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.end("")
//     }
// })




//////////////////////////////////////////////////////////////////

// const path = require("path")

// app.get("/",(req,res)=>{
//     // res.send("Home")
//     // res.send("<h1>Home</h1>")
//     // res.json("<h1>Home</h1>")

//     res.sendFile(path.join(__dirname,"views","index.html"))
// })

// app.get("/contact",(req,res)=>{
//     // res.send("Home")
//     // res.send("<h1>Home</h1>")
//     // res.json("<h1>contact</h1>")

//     res.sendFile(path.join(__dirname,"views","contact.html"))
// })

// app.get("*",(req,res)=>{
//     res.status(404)
//     res.send("<h1>404</h1>")

//     // res.status(404).send("<h1>404</h1>")
// })

// const PORT = process.env.PORT || 1024;
// app.listen(PORT,()=>{
//     console.log("server is running 0n 1024")
// })



///////////////////////////////////////////////////////////////////


app.use(express.static("views"))

app.get("*",(req,res)=>{
    res.status(404).send("<h1>404</h1>")
})

const PORT = process.env.PORT || 1024;
app.listen(PORT,()=>{
    console.log("server is running 0n 1024")
})