const mongoose = require("mongoose")




const companySchema = new mongoose.Schema({
    
    name:{
        type :String
       
    },
    department:{
        type:String
        
    },
    teamLead:{
        type :String
    },
    totalStaffs:{
        type:Number
    }

})


module.exports = mongoose.model('Company',companySchema)