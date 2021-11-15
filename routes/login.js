const express=require('express')
const router=express.Router()
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../models/User')

router.get('/',(req,res)=>{
})

router.post('/',async (req,res)=>{
  try{
    User.findOne({email:req.body.email})
    .then((user)=>{
      if(user)
      {
        bcrypt.compare(req.body.password,user.password,(err,match)=>{
          if(!match)
          {
            res.send(err);
          }else{
            user.generateAuthToken().
            then((token)=>{

             res.cookie('jwt', token, { maxAge: 3600000 })
             res.json(user);

            })
          }
        })

      }else{

        res.json({error:"wrong credentials"})

      }
    })


  }catch(e){

  }





})


module.exports=router
