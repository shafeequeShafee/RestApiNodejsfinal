/////////  POSTMAN   ////////////////////////////////


const express = require('express')
const app = express()


///////////// static  aayyi routing kodukkunnath ////////////////

// const staticData =require("./route/staticdata")
// app.use("/userStatic",staticData)   /// default route evidae settakkaaam
//app.use("dataset/userStatic",staticData)





//////  Dynamic aayi routing kodukkunath //////////////

// const dynamicData =require("./route/dynamicdata")
// app.use(dynamicData)





// eth njammakku ellarkkum url acess cheyanvendiii
const cors = require("cors")
app.use(cors())
// enee specific aaayi venekil 
// app.use(cors({
//     origin :" port number kodukkum"
// }))





app.use(express.static("views"))
app.use(express.urlencoded({ extended: true }))

const userData = [
    { id: 1, name: "sfq", company: "claysys" },
    { id: 2, name: "sharvi", company: "claysys" },
    { id: 3, name: "tintu", company: "claysys" },
    { id: 4, name: "boss", company: "claysys" },
    { id: 5, name: "raseena", company: "claysys" }
]
app.get("/userget", (req, res) => {
    res.json(userData)
})
// enee user verae nthekillum / use cheythal 
app.get("*", (req, res) => {
    res.json("No route available")
})

///  POST  ////////////

// app.post("/userpost",(req,res)=>{
//     // res.json(req.body.name)
//     res.json(req.body)
// })

// app.post("/userpost",(req,res)=>{
//     // res.json(req.body.name)
//     res.json(userData)
// })




/////////////// id parameter     ////////////////////////////

// app.post("/userpost/:id",(req,res)=>{    // quary parameter & id parameter || path parameter


//http://localhost:1697/userpost?id=2&name:sfq
app.post("/userpost/:id/:name", (req, res) => {

    // res.json(req.body.name)
    // res.json(req.params.id) //
    // res.json(typeof(req.params.id))  // id type string

    // const userId = parseInt(req.params.id)
    // const userId = req.params.id | 0  // advanced javascript
    const userId = +req.params.id   // advanced javascript
    // res.json(typeof userId)

    const userName = req.params.name

    const filteredUserData = userData.filter((data, index, array) => {
        // return data.id === userId 

        return data.id === userId && data.name === userName
    })
    res.json(filteredUserData)
})


/////////  quary parameter /////////////


// http://localhost:1697/userpost?id=2   // query parameter
// app.post("/userpost",(req,res)=>{   
//     const query = req.query  
//         res.json(query)
// })



// app.post("/userpost",(req,res)=>{   
//     const userId = parseInt(req.query.id)  
//     const filteredUserData= userData.filter((data,index,array)=>{
//         // return data.id === userId 

//         return data.id === userId 
//     })
//     res.json(filteredUserData)

// })


app.post("/userpost", (req, res) => {
    const userId = parseInt(req.query.id)
    const filteredUserData = userData.filter((data, index, array) => {
        if (userId) {
            return data.id === userId
        }
        else {
            return data
        }

    })
    res.json(filteredUserData)

})

///  enee datas kodukkaan frontend nnu
const userArray = [
    {
        name: "sfq",
        id: 1
    }
]
app.post("/addUser", (req, res) => {
    const { name } = req.body
    userArray.push(name)
    res.json("data has been added sucessfully")

})

app.post("/getUser", (req, res) => {
    res.json(userArray)

})








const PORT = process.env.PORT || 1698;
app.listen(PORT, () => {
    console.log("server is running 0n 1698")
})