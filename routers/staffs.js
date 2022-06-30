const express = require('express')
const routerStaff = express.Router()
var multer = require('multer');
const path = require('path');


const fs = require("fs");
const Staff = require("../models/staff")


const {
    getStaffsDetails,
    getStaffsDetailsById,
    postStaffDetails,
    patchStaffDetails,
    deleteStaffDetails
} = require("../controller/controlStaff")

// // SET STORAGE
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
//   var upload = multer({ storage: storage })
//   routerStaff.post("/uploadphoto",upload.single('myImage'),(req,res)=>{
//     var img = fs.readFileSync(req.file.path);
//     var encode_img = img.toString('base64');
//     var final_img = {
//         contentType:req.file.mimetype,
//         image:new Buffer(encode_img,'base64')
//     };
//     Staff.create(final_img,function(err,result){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(result.img.Buffer);
//             console.log("Saved To database");
//             res.contentType(final_img.contentType);
//             res.send(final_img.image);
//         }
//     })
// })


routerStaff.get('/', getStaffsDetails)

routerStaff.get('/:id',getStaffsDetailsById)

routerStaff.post('/postStaffDetails', postStaffDetails)

routerStaff.patch('/:id', patchStaffDetails)

routerStaff.delete('/:id',deleteStaffDetails)


module.exports = routerStaff