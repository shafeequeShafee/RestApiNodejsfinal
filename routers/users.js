const express = require('express')
const routerUser =express.Router()

const {login,SigningUp,getUserDetails,deleteUserDetails}=require("../controller/userController")

const auth = require("../middleWare/auth")

routerUser.post('/login',login)
routerUser.post('/signingUp',SigningUp)
routerUser.get('/getUserDetails/me',auth,getUserDetails)
routerUser.delete('/deleteUserDetails/:id',auth,deleteUserDetails)




module.exports= routerUser