const express = require('express')
const routerUser =express.Router()

const {login,SigningUp,logOut,logOutAll,getUserDetails,deleteUserDetails}=require("../controller/userController")

const auth = require("../middleWare/auth")

routerUser.post('/login',login)
routerUser.post('/signingUp',SigningUp)
routerUser.post('/logOut',auth,logOut)
routerUser.post('/logOutAll',auth,logOutAll)
routerUser.get('/getUserDetails/me',auth,getUserDetails)
routerUser.delete('/deleteUserDetails/:id',auth,deleteUserDetails)




module.exports= routerUser