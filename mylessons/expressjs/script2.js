/////////////////   MIDLE WARE  ///////////

const express = require("express"); 
const app= express();



// app.get("/",(req,res)=>{
//     res.send("<h1>sucess</h1>")
// })

// app.get("/profile",Token,(req,res,next)=>{    // add cheytha next
//     console.log("user logged")
//     res.send("<h1>sucess</h1>")
//     next()
// },()=>{
//     console.log("last midleware")  // eth vilikannekil next add cheyannam
// })

// function Token(req,res,next){
//     console.log("Token is creating")
//     // nnit next koduthallae adutha function vilikkollu 
//     next()
// }


// const PORT = process.env.PORT || 1697;
// app.listen(PORT,()=>{
//     console.log("server is running 0n 1697")
// })


///////////////////////   Token Validation  //////////////////////////////

// app.get("/profile",Token,Validation,(req,res,next)=>{    // add cheytha next
//     console.log("user logged")
//     res.send("<h1>sucess</h1>")
// })

// function Token(req,res,next){
//     console.log("Token is creating.....")
//     // console.log("req",req)   // request is object , we can create our own property
//     // req.user = " SFQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ"  /// ADDING PROPERTY TO THE OBJECT
//     // console.log(req.user)


//     req.user = "SFQ"
//     setInterval(()=>{
//         const TOKEN = "123"
//         req.token = TOKEN
//         next()
//     },1000)
    
    
// }

// function Validation(req,res,next){
//     if(req.token){
//         console.log("Token approved")
//         next()
//     }
   
// }

// const PORT = process.env.PORT || 1697;
// app.listen(PORT,()=>{
//     console.log("server is running 0n 1697")
// })



////////////////////  No token   ///////////////////////////////////////////////////////


// app.get("/profile",Token,Validation,(req,res,next)=>{    // add cheytha next
//     console.log("user logged")
//     res.send("<h1>sucess</h1>")
// })

// function Token(req,res,next){
//     console.log("Token is creating.....")
//     req.token =false
//     next()   
// }

// function Validation(req,res,next){
//     if(req.token){
//         console.log("Token approved")
//         next()
//         return
//     }
//     else if(req.token ==false){
//         console.log("no token")
//         res.send("<h1> No auth</h1>")
//         return
//     }
//     console.log("hiii")  /// return koduthaa pinnae athinnu shesham verunna code onnum execute aavooolla
// }

// const PORT = process.env.PORT || 1697;
// app.listen(PORT,()=>{
//     console.log("server is running 0n 1697")
// })

////////////////////////  Verae file nnu export cheyyaa /////////////////////////////////////////////////

// const  Token = require("./middleWare/token")
// const  Validation = require("./middleWare/validation")

// // vennekil egannae cheyyaam
// const middleWare = [Token, Validation]

// // app.get("/profile",Token,Validation,(req,res,next)=>{    // add cheytha next
// app.get("/profile",middleWare,(req,res,next)=>{    // add cheytha next
//     console.log("user logged")
//     res.send("<h1>sucess</h1>")
// })


// const PORT = process.env.PORT || 1697;
// app.listen(PORT,()=>{
//     console.log("server is running 0n 1697")
// })




////////////////  Application Level MiddleWare (njammak common aayi oru middleware kodukannekil ) ///////////////////////

const  Token = require("./middleWare/token")
const  Validation = require("./middleWare/validation")

const middleWare = [Token, Validation]

// app.use(function(req,res,next){

// })
app.use(DateGenerator)


app.get("/profile",middleWare,(req,res,next)=>{  
    console.log("user logged")
    res.send("<h1>sucess</h1>")
})

app.get("/",(req,res,next)=>{  
    console.log("Default Url")
    res.send("<h1>Home</h1>")
})


// eth evideyum vilichittila but ath vilikkum  ///
function DateGenerator(req,res,next){
  console.log( new Date()) 
  next()
}



const PORT = process.env.PORT || 1698;
app.listen(PORT,()=>{
    console.log("server is running 0n 1698")
})