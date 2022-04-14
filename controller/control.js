///////////////////    debugging   //////////////////////////


// => node inspect script
// enee chromil =>chrome://inspect

// Add folder to work space 
// pinnae console kittaan vendi => esc button

var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/SfqDBex'
var ObjectId = require('mongodb').ObjectId;

const { dashLogger } = require("../logger/logger");


const Student = require("../models/student")



// const student =new Student({
//     rollNumber: 8,
//     name:'cristaino',
//     course:'Football',
//     skills:'Everything in football',
//     email:"sfq@gmail.com",
//     status :true
// })
// student.save().then((res)=>{
//    console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })






const getName = async (req, res) => {
    console.log("get name console")
    res.send('<h1>my name is sfq </h1>')
}

const getStudentsDetails = async (req, res) => {

    try {

        // we want get the handle of the schema in this file
        const students = await Student.find()
        res.json(students)
    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }
}

const getStudentsDetailsById = async (req, res) => {

    try {
        // we want get the handle of the schema in this file
        const student = await Student.findById(req.params.id)
        res.json(student)
    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }
}

const postStudentsDetails = async (req, res) => {

    // debugger
    const student = new Student({
        rollNumber: req.body.rollNumber,
        name: req.body.name,
        course: req.body.course,
        skills: req.body.skills,
        status: req.body.status,
        email: req.body.email
    })
    try {
        const a1 = await student.save()
        res.json(a1)
    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.status(401).send({

            message: error.message,

            error: error.message

        });
        // res.render("400");
    }
}

const patchStudentDetails = async (req, res) => {

    try {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("SfqDBex");
            var id = new ObjectId(req.body.id);

            var myquery = { _id: id };
            var newvalues = { $set: req.body };
            dbo.collection("students").updateOne(myquery, newvalues, function(err, result) {
              if (err) throw err;
              console.log(result)
              console.log("1 document updated");
              db.close();
            });
            res.send("sucessfully updated")
          });
    }

    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }
    
}


const putStudentDetails = async (req, res) => {
    try {
        console.log("put")

    }

    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }

}


const deleteStudentDetails = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id)
        const a1 = await student.remove()
        res.json(a1)

    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }
}


module.exports = {
    getName,
    getStudentsDetails,
    getStudentsDetailsById,
    postStudentsDetails,
    patchStudentDetails,
    deleteStudentDetails,
    putStudentDetails
}
