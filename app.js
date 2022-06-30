

///////////////////////////////////////////////////////////////////////////

const express = require("express")
const mongoose = require("mongoose")
//const url = 'mongodb://localhost/SfqDBex' // allekil just 'mongodb:/SfqDBex' egannae  koduthallum mathi,
// but chellappo verae machinillum same database ndavvum
// athond localhost kodukkunnu

/// for password security  => npm i bcryptjs






//////////////////////////////////////////////////////////////////////////

// const { MongoClient } = require('mongodb');
// const uri ="mongodb+srv://<username>:<password>@<your-cluster-url>/sample_airbnb?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// client.connect();

const url ="mongodb+srv://root:root@myfirstcluster.2ludm.mongodb.net/company?retryWrites=true&w=majority";




const app = express()





//// eth oru middleware but vilikenda avashyam illa... first load aavunna middleware  ///
// app.use(DateGenerator)
// function DateGenerator(req, res, next) {
//     console.log(new Date())
//     next()
// }




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


//////////////////////////////////////

// http://localhost:1697/user/signingUp

// http://localhost:1697/student

/// user model

// {
//     "username":"sfq",
//     "languages":["html, 'java"],
//     "age":25,
//     "company":"claysys",
//     "salary":15000,
//     "experience":3,
//     "teamLead":"Das",
//     "password":"sfq@123",
//     "email":"shafeequeottakath1997@gmail.com"
    
// }


///// student model
// {
//     "rollNumber":29,
//     "name":"sfq",
//     "course":"ec",
//     "skills":"full skilled",
//     "email":"sfq@gmail.com",
//     "status":"true"
    
// }

//////////////////// git Authentication ///////////////

// git config --global user.name "shafeequeShafee"
// git config --global user.email "shafeequeottakath1997@gmail.com"