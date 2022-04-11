const bcrypt = require("bcryptjs/dist/bcrypt")
const res = require("express/lib/response")
const mongoose = require("mongoose")




const userSchema = new mongoose.Schema({
    
    username:{
        type :String
       
    },
    languages:{
        type:Array
        
    },
    age:{
        type :Number
    },
    company:{
        type:String
    },
    salary:{
        type:String
    },
    experience:{
        type:Number
    },
    teamLead:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    }

})

const User=mongoose.model('User',userSchema)

const findByCredentials=async (email,password)=>{
    
    const user = await User.findOne({email:email})
    
    // const isMatch = await bcrypt.compare(password,user.password)
    // if(! isMatch){
    //     throw new Error('Unable to login')
    // }
    // return user

    const isMatch =()=>{
        if(!user){
            return false
        }
        else if(user.password === password){
            return user
        }
        else{
            // console.log("password not match")
            //  throw new Error('Unable to login')
            return false
        }  
    }
     return isMatch()
}

module.exports ={ User,findByCredentials}

// module.exports = mongoose.model('User',userSchema)