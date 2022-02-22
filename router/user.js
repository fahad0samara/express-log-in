const express = require('express');
const router = express.Router();
const mongoose= require('../mongo')
const bcrypt = require('bcrypt');

const logger=require('../winston')
router.get('/', async (req, res ,next) => {
try{
   
const data= await mongoose.find({})
res.send(data) 

}catch(err) {
    next(err)
    l
}

})



router.get('/', (req, res, next) => {
    let token = req.headers.token; //token
    jwt.verify(token, 'JSON', (err, decoded) => {
      if (err) return res.status(401).json({
        title: 'unauthorized'
      })
      //token is valid
      User.findOne({ _id: decoded.userId }, (err, user) => {
        if (err) return console.log(err)
        return res.status(200).json({
          title: 'user grabbed',
          user: {
            email: user.email,
            name: user.name
          }
        })
      })
  
    })
  })
router.post('/', async (req, res ,next) => {
    try{
        // here to handle the bcrypt and to show the password in 424s542#$#$53
        const data= await bcrypt.hash(req.body.password,10)
        const data1=new mongoose({username:req.body.username,password:data})
        const result= await data1.save()
        if(!result){
            return res.status(400).send('invalid password')    
        }
        
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
logger.error(err)
        }
    })
    router.delete('/:id', async (req, res,next) => {
        try{
const data= await mongoose.findByIdAndDelete(req.params.id)
res.send(data)
        }catch(err){
            next(err)
            logger.error(err)
        }
    })
  


module.exports = router;