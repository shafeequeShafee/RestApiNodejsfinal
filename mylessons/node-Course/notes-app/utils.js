console.log('utils.js')

const job ='software Engineer'

// njammak utils.js  llae varriable or functions verae js file lukalil use  cheyyannekil 
// we should explicitly export all of the stuff this file should share with the outside

const add=(x,y)=>{
  return x + y
}

// module.exports = job  // njammak oru object aayum export cheyyaam

module.exports ={job,add}