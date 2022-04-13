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
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]

})

const User=mongoose.model('User',userSchema)
module.exports ={ User}
