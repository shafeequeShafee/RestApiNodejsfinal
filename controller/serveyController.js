const { dashLogger } = require("../logger/logger");

var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/SfqDBex'
const Servey = require("../models/Servey")



const InsertDetailsUsingQuery = async=(req,res)=>{
    try{  
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            const  dbo = db.db("SfqDBex");
            const  myobj = { name: "EY", address: "kochi" , staffs:3000}
            const value=dbo.collection("customers").insertOne(myobj, function(err, result) {
              if (err) throw err;
              console.log("1 document inserted");
              res.json(result)
              db.close();
            });           
          });
    }
    catch(error){
       console.log(error)
    }
}



const InsertDetailsUsingPost = async=(req,res)=>{
    try{  
        console.log("post using query")
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            const  dbo = db.db("SfqDBex");
            const  myobj = req.body
            console.log(req.body)
            const value=dbo.collection("customers").insertOne(myobj, function(err, result) {
              if (err) throw err;
              console.log("1 document inserted");
              res.json(result)
              db.close();
            });           
          });
    }
    catch(error){
       console.log(error)
    }
}



const FindingDetailsUsingQuery = async=(req,res)=>{ 
    try{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            const  dbo = db.db("SfqDBex");
            const datas ={name: "tcs", address: "kochi"};
            dbo.collection("customers").findOne(datas, function(err, result) {
                if (err) throw err;
                console.log(result);
                res.json(result)
                db.close();
              });     
          });

    }
    catch(error){
       console.log(error)
    }
}



const JoinsUsingQuery = async=(req,res)=>{
    console.log("JoinsUsingQuery")
    try{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            const  dbo = db.db("SfqDBex");
            dbo.collection('Orders').aggregate([
                { $lookup:
                    {
                        from: "Stocks",
                        localField: "item",
                        foreignField: "stock",
                        as: "Stock details"
                    }
                 }
                ]).toArray(function(err, result) {
                if (err) throw err;
                res.json(result)
                // console.log(JSON.stringify(result));
                db.close();
            });  
          });

    }
    catch(error){
       console.log(error)
    }
}



const getServeysDetails=async(req,res)=>{
    
    try{
       const serveys = await Servey.find()
       res.json(serveys)
    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }  
}



const getServeysDetailsById=async(req,res)=>{
    
    try{
       const servey = await Servey.findById(req.params.id)
       res.json(servey)
    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }  
}



const postServeyDetails=async(req,res)=>{

    const servey =new Servey({
        name: req.body.name,
        language: req.body.language,
        experience:req.body.experience,
        teamLead:req.body.teamLead
    })
    try{
        const a2= await servey.save()
        res.json(a2)
    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }
}

const patchServeyDetails=async(req,res)=>{
    try{
        const servey = await Servey.findById(req.params.id)
        servey.name = req.body.name
        const a1= await Servey.save()
        res.json(a1)

    }

    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }
   
}



const deleteServeyDetails=async(req,res)=>{
    try{
        const servey = await Servey.findById(req.params.id)
        const a1= await servey.remove()
        res.json(a1)

    }
    catch (error) {
        console.error(error);
        dashLogger.error(`Error : ${error},Request : ${req.originalUrl}`);
        res.render("400");
    }
}


module.exports ={
    getServeysDetails,
    getServeysDetailsById,
    postServeyDetails,
    patchServeyDetails,
    deleteServeyDetails,
    InsertDetailsUsingQuery,
    FindingDetailsUsingQuery,
    JoinsUsingQuery,
    InsertDetailsUsingPost
}
