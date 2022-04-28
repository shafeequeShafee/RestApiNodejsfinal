

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
    deleteUserDetails
}