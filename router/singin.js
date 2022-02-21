const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose= require('../mongo')
    const jwt=require('jsonwebtoken')



router.get('/', async (req, res ,next) => {
    try{
       
    const data= await mongoose.find({})
    res.send(data) 
    
    }catch(err) {
        next(err)
    }
    
    })

router.post('/',async (req,res,next)=> {
    const data=await mongoose.findOne({username:req.body.username})
    if(!data){
        return res.status(400).send('invalid username')
    }
    try{
        // here to show the password and correct withe password 425262
     const data1=await bcrypt.compare(req.body.password,data.password)
         if(!data1){
             return res.status(400).send('invalid password')    
         }
         const token= jwt.sign({_id:data._id},'JSON')
            res.send(token)   
         
    }
    catch(err){
        next(err)
    }
})


module.exports = router;