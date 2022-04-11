function Validation(req,res,next){
    if(req.token){
        console.log("Token approved")
        next()
        return
    }
    else if(req.token ==false){
        console.log("no token")
        res.send("<h1> No auth</h1>")
        return
    }
    console.log("hiii")  /// return koduthaa pinnae athinnu shesham verunna code onnum execute aavooolla
}


module.exports = Validation