const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose= require('../mongo')


router.post('/',async (req,res,next)=> {
    const data=await mongoose.findOne({username:req.body.username})
    if(!data){
        return res.status(400).send('invalid username')
    }
    try{
     const data1=await bcrypt.compare(req.body.password,data.password)
         if(!data1){
             return res.status(400).send('invalid password')    
         }
            res.send('ok')   
         
    }
    catch(err){
        next(err)
    }
})


module.exports = router;