

const express = require('express')
const router =express.Router()


const userArray = []
router.post("/add",(req,res)=>{
    const {name} = req.body  
    userArray.push(name)
    res.json("data has been added sucessfully")
    
       
})

router.get("/geting",(req,res)=>{
    res.json(userArray)
       
})

module.exports= router
