/////////////////////   LOgin form  //////////////////

const express =require('express')
const app=express()

app.use(express.static("views"))            // app.use() oru middleware aannu

// rand midleware for post/ put/ request
app.use(express.json())  // verunna data json aayi convert cheyyth parse cheyyollu
app.use(express.urlencoded({extended: true}))  // form koduthulla data string aanno array anno nokii convert cheyyaan

const emailDb ="sfq@gmail.com"
const passwordDb ="123456"

app.post("/login",(req,res)=>{              // serverillekku verunna methods usecheyumbol rand middleware use cheyannam
    const {email , password} =req.body         // get nnu vendaa
    if(email===emailDb && password===passwordDb){  // html il njammallu raw aayannu data kodukkunnath, ath serverillekku ethumbol 
    res.send("Login Sucessfull")                       // ath json aayii convert cheythu parse cheyannam , ennallollu script.js ath 
                            // use cheyyaan pattollu
    }
    else{
        res.send("login failed")
    }
        console.log("body :",req.body)             
})                                               

const PORT = process.env.PORT || 1697;
app.listen(PORT,()=>{
    console.log("server is running 0n 1697")
})