////////////  Http Modules   //////////

const http = require('http')
const fs =require("fs")
const path =require("path")

// rand methodil server create cheyyaam 

        //   1 )

// http.createServer((req, res)=>{      /// ethiludeyannu njammallae server create cheyunnath
//     res.write("this is node js");
//     res.end();
//     console.log(req.url)
//     console.log("test")

// }).listen(1024,()=>{console.log("server is running")} )   /// eth 2 parameter edukkum , 1)port number, 2)callbackmethode

//     2 )

const server =   http.createServer((req, res)=>{     
    // res.write("this is node js");
    // res.write("<h1>this is node js</h1>");

    // res.writeHead(200, {"Content-Type":"application/json"})   // response sucess annekil status code 200
    // res.end("<h1>hello</h1>");

    // res.writeHead(200, {"Content-Type":"text/html"})  
    // res.end("<h1>hello</h1>");


    
    if(req.url === "/"){
        fs.readFile(path.join(__dirname,"views","index.html"),"utf-8",(err,data)=>{
            if(err) throw err;
            res.writeHead(200, {"Content-Type":"text/html"})  
            res.end(data);
    
        })
    }

    if(req.url === "/contact"){
        fs.readFile(path.join(__dirname,"views","contact.html"),"utf-8",(err,data)=>{
            if(err) throw err;
            res.writeHead(200, {"Content-Type":"text/html"})  
            res.end(data);
    
        })
    }

    
    console.log(req.url)
    console.log("test")

})

const PORT =process.env.PORT || 1024;
server.listen(PORT,()=>console.log(`server is running on ${PORT}`))
