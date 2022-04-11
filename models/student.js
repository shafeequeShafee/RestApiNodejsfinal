const mongoose = require("mongoose")

const validator =require('validator')


//  RDBMS   --  Database , Tables     , Rows     , Columns
//  MONGODB --  Database , Collections, Documents, Fields
//

//// we creating database in this structure
const studentSchema = new mongoose.Schema({
    rollNumber:{
        type :Number,
        // required:true,
        // validate(value){
        //     if(value< 0){
        //         throw new Error("Roll must greater than zero")
        //     }
        // }
    },
    name:{
        type :String,
        // required:true,
        // trim:true
    },
    course:{
        type:String,
        required: true
    },
    skills:{
        type :String,
        // required:true
    },
    email:{
        type:String,
        required: true
        // lowercase:true,
        // minlength:5,
        // validate(value){
        //     if( ! validator.isEmail(value)){   // predefined librarary
        //         throw new Error("valid email is required")
        //     }
        // }
    },
    status:{
        type: Boolean,
        // required:true,
        default:false
    }

})


module.exports = mongoose.model('Student',studentSchema)