const express = require("express")
const mongoose = require("mongoose")
const url = 'mongodb://localhost/SfqDBex' // allekil just 'mongodb:/SfqDBex' egannae  koduthallum mathi,
// but chellappo verae machinillum same database ndavvum
// athond localhost kodukkunnu

/// for password security  => npm i bcryptjs

const app = express()





//// eth oru middleware but vilikenda avashyam illa... first load aavunna middleware  ///
app.use(DateGenerator)
function DateGenerator(req, res, next) {
    console.log(new Date())
    next()
}

// app.use((req,res,next)=>{
//     if(req.method ==='GET'){
//         res.send('Get request are dissabled')
//     }
//     else{
//         next()
//     }
// })


// app.use((req, res, next) => {
//     res.status(503).send("site under maintenance")
// })



////////////////////////////////////////

mongoose.connect(url, { useNewUrlParser: true })  //warning oyivakkaan {}
const con = mongoose.connection  // we will hold on connection

con.on('open', function () {
    console.log("connected...")
})

app.use(express.json()) // json format use cheyyaaaan

app.use(express.urlencoded({ extended: true }))   // eth vennam ennu illa, forms nnu data edukkumbol mathram mathi

const routerStaff = require("./routers/staffs")
const studentRouter = require("./routers/students")
const Companyrouter = require("./routers/companys")
const Serveyrouter = require("./routers/serveys")


const routerUser = require("./routers/users")

app.use('/student', studentRouter)
app.use('/staff', routerStaff)
app.use('/company', Companyrouter)
app.use('/servey', Serveyrouter)

app.use('/user', routerUser)








const PORT = process.env.PORT || 1697;
app.listen(PORT, () => {
    console.log("server is running 0n 1697")
})


////////////  Password protection      /////
// encryption

// const bcrypt =require("bcryptjs")
// const myFunction = async ()=>{
//    const password ="Red12345!"
//    const hashedPassword = await bcrypt.hash(password,8)  // 8times ath hasing allgorith use cheyyum

//    console.log("password: ",password)
//    console.log("hashedPassword: ",hashedPassword)

//    const isMatch = await  bcrypt.compare("Red12345!",hashedPassword)
//    console.log("isMatch: ",isMatch)
// }
// myFunction()

// descryption





//////  Creating Tokens  /////////////


// const jwt = require("jsonwebtoken")

// const creatingToken= async ()=>{
//    const token =jwt.sign({_id:'abc123'},'thismynewcourse',{expiresIn:'7 days'})
//    console.log('token',token)

//    const data=jwt.verify(token,'thismynewcourse')
//    console.log('data',data)
// }

// creatingToken()