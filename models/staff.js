const mongoose = require("mongoose")




const staffSchema = new mongoose.Schema({
    
    name:{
        type :String
       
    },
    experience:{
        type:String
        
    },
    teamLead:{
        type :String
    },
    language:{
        type:String
    }

})


module.exports = mongoose.model('Staff',staffSchema)