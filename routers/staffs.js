const express = require('express')
const routerStaff = express.Router()


const {
    getStaffsDetails,
    getStaffsDetailsById,
    postStaffDetails,
    patchStaffDetails,
    deleteStaffDetails
} = require("../controller/controlStaff")


routerStaff.get('/', getStaffsDetails)

routerStaff.get('/:id',getStaffsDetailsById)

routerStaff.post('/', postStaffDetails)

routerStaff.patch('/:id', patchStaffDetails)

routerStaff.delete('/:id',deleteStaffDetails)


module.exports = routerStaff