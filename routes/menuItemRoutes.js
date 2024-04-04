const express=require("express");
const router=express.Router();

const MenuItem = require('../models/Menu');

router.post('/',async(req,res)=>{
    try {
      const data=req.body;
      const newMenu=new MenuItem(data);
      const savedMenu=await newMenu.save();
      res.status(200).json(savedMenu);
  
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  })
  
router.get('/', async (req, res) => {
    try {
        const persons = await MenuItem.find();
        res.status(200).json(persons);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports=router;