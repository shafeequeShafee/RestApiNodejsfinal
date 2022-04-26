function Token(req,res,next){
    console.log("Token is creating.....")
    req.token =true
    next()   
}
module.exports = Token