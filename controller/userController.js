//////   emails send ////
const nodeoutlook = require('nodejs-nodemailer-outlook')

////////  Authentication and token creation 

const { Console } = require("winston/lib/winston/transports")
const {findByCredentials,generateAuthToken,getPublicProfile}= require("../CommonFunction/commonFun")
const {User}  = require("../models/user")

const login =async(req,res)=>{
    try{
       const user =await findByCredentials(req.body.email,req.body.password)
       
       ////// Token creation ///////////
       const token =  await generateAuthToken(user)
       if(user && token){
           console.log("user and token")
        // res.send({user,token})  
           //hiding private data
           res.send({user:getPublicProfile(user),token:token})
       }
       else{
        console.log("last")
        res.send("unable to login")
       }
       
    }
    catch(e){
       res.status(400).send(e)
    }
}



const SigningUp=async(req,res)=>{

   
    const user =new User(req.body)
    try{
        const a1= await user.save()
        const token =  await generateAuthToken(user)
        res.send({a1,token})
    }
    catch (error) {
        res.status(401).send({

            message: error.message,

            error:error.message

        });
        
    }
}


const logOut=async(req,res)=>{
    
    try{
        req.user.tokens=req.user.tokens.filter((token)=>{
           return token.token !== req.token
        })
        await req.user.save()
        res.send('sucessfully logouted')
    }
    catch (error) {
        res.status(500).send({

            message: error.message,

            error:error.message

        });
        
    }
}



const logOutAll=async(req,res)=>{
    
    try{
        req.user.tokens=[]
        await req.user.save()
        res.send('sucessfully logouted all')
    }
    catch (error) {
        res.status(500).send({

            message: error.message,

            error:error.message

        });
        
    }
}




const getUserDetails=async(req,res)=>{
    
    try{

       const user =req.user
       res.send(user)
    }
    catch (error) {
       res.status(400).send(error)
    }  
}





const deleteUserDetails=async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        await user.remove()
        res.send('sucessfully deleted')

    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }
}


async function sendTestEmail(req, res, next) {
console.log(req.body.message);
nodeoutlook.sendEmail({
auth: {
user: "shafeequesfq1997@outlook.com",
pass: "Sfq@6120"
},
from: 'shafeequesfq1997@outlook.com',
to: req.body.email,
subject: `hi ${req.body.username}`,
html: `<b>${req.body.languages}</b>`,
text: req.body.languages,
//replyTo: 'receiverXXX@gmail.com',
// attachments: [
// {
// filename: 'text1.txt',
// content: 'hello world!'
// },
// { // binary buffer as an attachment
// filename: 'text2.txt',
// content: new Buffer('hello world!','utf-8')
// },
// { // file on disk as an attachment
// filename: 'text3.txt',
// path: '/path/to/file.txt' // stream this file
// },
// { // filename and content type is derived from path
// path: '/path/to/file.txt'
// },
// { // stream as an attachment
// filename: 'text4.txt',
// content: fs.createReadStream('file.txt')
// },
// { // define custom content type for the attachment
// filename: 'text.bin',
// content: 'hello world!',
// contentType: 'text/plain'
// },
// { // use URL as an attachment
// filename: 'license.txt',
// path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
// },
// { // encoded string as an attachment
// filename: 'text1.txt',
// content: 'aGVsbG8gd29ybGQh',
// encoding: 'base64'
// },
// { // data uri as an attachment
// path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
// },
// {
// // use pregenerated MIME node
// raw: 'Content-Type: text/plain\r\n' +
// 'Content-Disposition: attachment;\r\n' +
// '\r\n' +
// 'Hello world!'
// }
// ],
onError: (e) => console.log(e),
onSuccess: (i) => console.log(i)
}

);
res.send("email sent");
}


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


module.exports ={
    login,
    SigningUp,
    logOut,
    logOutAll,
    getUserDetails,
    deleteUserDetails,
    sendTestEmail
}