const mongoose = require("mongoose")
const serveySchema = new mongoose.Schema({
    
    name:{
        type :String
       
    },
    address:{
        type:String
        
    },
    phone:{
        type :Number
    },
    job:{
        type:String
    }

})


module.exports = mongoose.model('Servey',serveySchema)