const express = require('express')
const routerUser =express.Router()

const {siginingUp}=require("../controller/userController")



routerUser.post('/login',siginingUp)




module.exports= routerUser