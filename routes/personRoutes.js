const express=require("express");
const router=express.Router();

const Person = require('../models/Person');

router.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newPerson = new Person(data);
      const savedPerson = await newPerson.save();
      res.status(201).json(savedPerson); // 201 Created status code
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Get all persons
router.get('/', async (req, res) => {
    try {
      const persons = await Person.find();
      res.status(200).json(persons);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

router.get("/:workType",async (req,res)=>{
const workType=req.params.workType;
try {
    if(workType =='chef'|| workType=='manager'|| workType=='waiter'){
    const response=await Person.find({work:workType});
    res.status(200).json({response});
    }
    else{
    res.status(404).json({error:"Invalid work type"});
    }
} catch (error) {
    res.status(404).json({error:"Internal server error."});
}
})

router.put('/:id',async (req,res)=>{
    try{
        const personId=req.params.id;
        const updatedPersonData=req.body;

        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error:"Person not found"});
        }
        console.log('data updated');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

router.delete('/:id',async (req,res)=>{
    try {
        const personId=req.params.id;
        const response=await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:"Person not found"});
        }
        console.log("data deleted");
        res.status(200).json({message:"Person is deleted"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }
})
module.exports= router;