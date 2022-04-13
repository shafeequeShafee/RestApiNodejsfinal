
const {User}  = require("../models/user")

const jwt = require("jsonwebtoken")

const auth = async(req,res,next)=>{
    try{
       const token = req.header('Authorization')
       const decoded =jwt.verify(token,'thismynewcourse')
       const user = await User.findOne({_id:decoded._id, 'tokens.token':token})

       if(!user){
           res.send("ERROR")
       }
       req.user =user
       next()
    }
    catch(err){
        res.status(401).send({error:`please authenticate ${err}`})   
    }
}

module.exports= auth