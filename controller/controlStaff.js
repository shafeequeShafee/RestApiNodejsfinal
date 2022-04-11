

const { dashLogger } = require("../logger/logger");


const Staff = require("../models/staff")




const getStaffsDetails=async(req,res)=>{
    
    try{
       const staffs = await Staff.find()
       res.json(staffs)
    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }  
}

const getStaffsDetailsById=async(req,res)=>{
    
    try{
       const staff = await Staff.findById(req.params.id)
       res.json(staff)
    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }  
}

const postStaffDetails=async(req,res)=>{

    const staff =new Staff({
        name: req.body.name,
        language: req.body.language,
        experience:req.body.experience,
        teamLead:req.body.teamLead
    })
    try{
        const a2= await staff.save()
        res.json(a2)
    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }
}

const patchStaffDetails=async(req,res)=>{
    try{
        const staff = await Staff.findById(req.params.id)
        staff.name = req.body.name
        const a1= await staff.save()
        res.json(a1)

    }

    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }
   
}

const deleteStaffDetails=async(req,res)=>{
    try{
        const staff = await Staff.findById(req.params.id)
        const a1= await staff.remove()
        res.json(a1)

    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }
}


module.exports ={
    getStaffsDetails,
    getStaffsDetailsById,
    postStaffDetails,
    patchStaffDetails,
    deleteStaffDetails
}
