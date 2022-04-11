

const { dashLogger } = require("../logger/logger");


const Company = require("../models/Company")

const getCompanyDetails=async(req,res)=>{
    
    try{

        // we want get the handle of the schema in this file
       const companydetails = await Company.find()
       res.json(companydetails)
    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }  
}

const getCompanyDetailsById=async(req,res)=>{
    
    try{
       const companyDetails = await Company.findById(req.params.id)
       res.json(companyDetails)
    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }  
}

const postCompanyDetails=async(req,res)=>{

    // debugger
    const company =new Company({
        name: req.body.name,
        department:req.body.department,
        teamLead:req.body.teamLead,
        totalStaffs :req.body.totalStaffs,
        
    })
    try{
        const a1= await company.save()
        res.json(a1)
    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.status(401).send({

            message: error.message,

            error:error.message

        });
        
    }
}

const patchCompanyDetails=async(req,res)=>{
    try{
        const companydetails = await Company.findById(req.params.id)
        companydetails.name = req.body.name
        const a1= await companydetails.save()
        res.json(a1)

    }

    // catch (error) {
    //     console.error(error);
    //     dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
    //     res.render("400");
    // }
    catch(err){
        res.send('Error: '+err)
     }
}

const deleteCompanyDetails=async(req,res)=>{
    try{
        const company = await Company.findById(req.params.id)
        const a1= await company.remove()
        res.json(a1)

    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }
}



module.exports ={
    getCompanyDetails,
    getCompanyDetailsById,
    postCompanyDetails,
    patchCompanyDetails,
    deleteCompanyDetails
}
