



// const { dashLogger } = require("../logger/logger");



const {User,findByCredentials}  = require("../models/user")

const siginingUp =async(req,res)=>{
    try{
        console.log("userController")
       const user =await findByCredentials(req.body.email,req.body.password)
       if(user ===false){
           res.send("unable to login")
       }
       res.send(user)
    }
    catch(e){
       res.status(400).send()
    }
}



// const getName= async(req,res)=>{
//     console.log("get name console")
//     res.send('<h1>my name is sfq </h1>')
// }

// const getStudentsDetails=async(req,res)=>{
    
//     try{

//         // we want get the handle of the schema in this file
//        const students = await Student.find()
//        res.json(students)
//     }
//     catch (error) {
//         console.error(error);
//         dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
//         res.render("400");
//     }  
// }

// const getStudentsDetailsById=async(req,res)=>{
    
//     try{
//         // we want get the handle of the schema in this file
//        const student = await Student.findById(req.params.id)
//        res.json(student)
//     }
//     catch (error) {
//         console.error(error);
//         dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
//         res.render("400");
//     }  
// }

// const postStudentsDetails=async(req,res)=>{

//     // debugger
//     const student =new Student({
//         rollNumber: req.body.rollNumber,
//         name: req.body.name,
//         course:req.body.course,
//         skills:req.body.skills,
//         status :req.body.status,
//         email:req.body.email
//     })
//     try{
//         const a1= await student.save()
//         res.json(a1)
//     }
//     catch (error) {
//         console.error(error);
//         dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
//         res.status(401).send({

//             message: error.message,

//             error:error.message

//         });
//         // res.render("400");
//     }
// }

// const patchStudentDetails=async(req,res)=>{
//     try{
//         const student = await Student.findById(req.params.id)
//         student.course = req.body.course
//         const a1= await student.save()
//         res.json(a1)

//     }

//     // catch (error) {
//     //     console.error(error);
//     //     dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
//     //     res.render("400");
//     // }
//     catch(err){
//         res.send('Error: '+err)
//      }
// }

// const deleteStudentDetails=async(req,res)=>{
//     try{
//         const student = await Student.findById(req.params.id)
//         const a1= await student.remove()
//         res.json(a1)

//     }
//     catch (error) {
//         console.error(error);
//         dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
//         res.render("400");
//     }
// }


// module.exports ={
//     getName,
//     getStudentsDetails,
//     getStudentsDetailsById,
//     postStudentsDetails,
//     patchStudentDetails,
//     deleteStudentDetails
// }
module.exports ={
    siginingUp
}