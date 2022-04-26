//////////   Importing  Node js Core modules   ///////////////

/// writing data to a file, if file does note exit ,it create it
const fs =require('fs')
fs.writeFileSync('notes.txt','my name is khan!')
/// appending string to existing txt file
fs.appendFileSync('notes.txt', ', this is my world')


//////////  Importing your own files   ///////////

/// utils.js file run aavum

// require('./utils.js')
const name ='shafeeque'
console.log(name)

// njammak utils.js  llae varriable or functions use cheyyannekil
// const job= require('./utils.js')
const {job,add}= require('./utils.js')
const sum =add(2,4)
console.log("sum",sum)
console.log(job)


///////////////////////////

const getnotes = require('./notes')
const msg= getnotes()
console.log(msg)


/////////  Module system /////////////

/////// Debugging Nodejs ///////////////
