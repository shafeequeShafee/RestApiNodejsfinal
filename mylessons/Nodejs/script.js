////////////////    INTERVALS /////////////////////



////setInterval il njammakku oru function ntae ulil verae oru function eyuthaam

// setInterval(function(){
// })


// setInterval(()=>{
// }, integer)  //// integer is interval


////  set interval egannae run cheythkondae irrikkum 

// setInterval(()=>{
//   console.log("Running")
// },2000)  



// const interval = setInterval(()=>{
//     console.log("Running")
// },1000) 

// // clearInterval use cheyunnath setintervalinnae kalayaan
// setTimeout(()=>{
//     clearInterval(interval)
// },6000) 


// setTimeout(()=>{
//     console.log("Running")
// },2000) 



//////////   WINDOW  nnu pakaram Global aanu node js sil  //////////


// console.log('global',global)


/////////  File Name    && directory name //////

// console.log('filename', __filename)
// console.log('directoryname', __dirname)


/////////   Modules / package ////////////////



const path =require('path')

///  Path 

// console.log('path',path)
// console.log('filenamealone',path.basename(__filename))
// console.log('directorynamealone',path.dirname(__filename))
// console.log('pathchange',path.join(__dirname,"api","script.js"))



/////  FileSystem

const fs =require("fs")
// console.log('fs',fs)

//            Folder create cheyyaaan

// fs.mkdir(path.join(__dirname ,"/Api"),{},(err)=>{
//     if (err) throw err;
// })     // {}, (),oru parameterum oru functionum , randum optional aannu




//          folderintae ulil folder create cheyyaan
// 
// fs.mkdir(path.join(__dirname ,"/Api3/api"),{},(er)=>{
//     if (er) throw er;
// })




//       folderintae ulil file create cheyyaaan
// 
// fs.mkdir(path.join(__dirname ,"/Api3/api/index.html"),{},(er)=>{
//     if (er) throw er;
// })




//           file / folder delete cheeyaan 
//
// fs.rmdir(path.join(__dirname ,"/Api3/api/index.html"),{recursive:true},(er)=>{
//     if (er) throw er;
// })




//            file create cheyyth athilekku datas add cheyyaan
//
// fs.writeFile(path.join(__dirname ,"/Api","api.txt"),"username: Sfq",(er)=>{
//     if (er) throw er;
// })





const userDetails={
    name:'sfq',
    job:'softwareEngineer'
}



// 
//           varriable declare cheyth athil ninnu values pass cheyyaan
//
// const name ="shafeeque"
console.log(userDetails)

//
// fs.writeFile(path.join(__dirname ,"/Api","api2.txt"), `name: ${name}`,(er)=>{
//     if (er) throw er;
// })





//           already exist aayulla file kku data append cheyyaaan
//
// const name="bhaii"

// fs.appendFile(path.join(__dirname ,"/Api","api2.txt"), `\n name: ${name}`,(er)=>{
//     if (er) throw er;
// })




//        file read cheyyaan
//
fs.readFile(path.join(__dirname ,"/Api","api2.txt"), {},(er,data)=>{  // data is buffer like numbers
    if (er) throw er;
    console.log(data)  // 
})

fs.readFile(path.join(__dirname ,"/Api","api2.txt"), "utf-8",(er,data)=>{  // utf-8 encoding codukkum
    if (er) throw er;
    console.log(data)  // 
})
