const express = require('express')
const router =express.Router()



const  Token = require("../middleWare/token")
const  Validation = require("../middleWare/validation")
const middleWare = [Token, Validation]


const {getName,getStudentsDetails,getStudentsDetailsById, postStudentsDetails,patchStudentDetails,deleteStudentDetails}=require("../controller/control")

router.get('/name',middleWare,getName)
router.get('/',getStudentsDetails)

router.get('/:id',getStudentsDetailsById)

router.post('/',postStudentsDetails)

router.patch('/:id',patchStudentDetails)

router.delete('/:id',deleteStudentDetails)


module.exports= router