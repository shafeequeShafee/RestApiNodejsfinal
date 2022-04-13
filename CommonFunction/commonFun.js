
const {User} =require("../models/user")
const jwt = require("jsonwebtoken")


const findByCredentials=async (email,password)=>{
    console.log("findByCredentals")
    
    const user = await  User.findOne({email:email})
    
    const isMatch =()=>{
        console.log("findByCredentals")
        if(!user){
            console.log("!user")
            return false
        }
        else if(user.password === password){
            console.log("password")
            return user
        }
        else{
            console.log("else")
            // console.log("password not match")
            //  throw new Error('Unable to login')
            return false
        }  
    }
     return isMatch()
}



// const {User}  = require("../models/user")


const generateAuthToken=async (user)=>{
   if(user ===false){
       return false
   }
   else{
    const token =jwt.sign({_id:user._id.toString()},'thismynewcourse')
    user.tokens = user.tokens.concat({token:token})
    await user.save()
    return token
   }
   
   
}


module.exports={findByCredentials,generateAuthToken}