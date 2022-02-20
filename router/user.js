const express = require('express');
const router = express.Router();
const mongoose= require('../mongo')
const bcrypt = require('bcrypt');

router.get('/', async (req, res ,next) => {
try{
   
const data= await mongoose.find({})
res.send(data) 

}catch(err) {
    next(err)
}

})
router.post('/', async (req, res ,next) => {
    try{
        const data= await bcrypt.hash(req.body.password,10)
        const data1=new mongoose({username:req.body.username,password:data})
        const result= await data1.save()
        res.send(result)
    }catch(err) {
        next(err)
    }
})
    router.put('/:id', async (req, res,next)=>{
        try{
            const data= await mongoose.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.send(data)
        }catch(err){
next(err)
        }
    })
    router.delete('/:id', async (req, res,next) => {
        try{
const data= await mongoose.findByIdAndDelete(req.params.id)
res.send(data)
        }catch(err){
            next(err)
        }
    })
  


module.exports = router;