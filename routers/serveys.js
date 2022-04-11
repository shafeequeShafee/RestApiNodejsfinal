const express = require('express')
const routerServey = express.Router()


const {
    getServeysDetails,
    getServeysDetailsById,
    postServeyDetails,
    patchServeyDetails,
    deleteServeyDetails,
    InsertDetailsUsingQuery,
    FindingDetailsUsingQuery,
    JoinsUsingQuery,
    InsertDetailsUsingPost
} = require("../controller/serveyController")


routerServey.get('/', getServeysDetails)
routerServey.get('/insert/sfq',InsertDetailsUsingQuery)
routerServey.get('/insert/sfq/finding',FindingDetailsUsingQuery)
routerServey.get('/insert/sfq/look/joins',JoinsUsingQuery)
routerServey.post('/insert/sfq', InsertDetailsUsingPost)

routerServey.get('/:id',getServeysDetailsById)

routerServey.post('/', postServeyDetails)

routerServey.patch('/:id', patchServeyDetails)

routerServey.delete('/:id',deleteServeyDetails)




module.exports = routerServey