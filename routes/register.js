const express=require('express')
const router=express.Router()
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../models/User')

router.get('/',(req,res)=>{
  return res.render('Index1',{})
})

router.post('/',async(req,res)=>{
  try{
    console.log(req.body)
    const userData={
      Username:req.body.Username,
      email:req.body.email,
      password:req.body.password
    }
    User.findOne({email:req.body.email})
    .then((user)=>{
      if(!user){
        //hashing the user's password
        bcrypt.hash(req.body.password,10,(err,hash)=>{
          userData.password=hash
          //creating the user in the database
          User.create(userData)
          .then((user)=>{
            res.json({status:user.email + 'registration successful'})
          }).catch(err=>{
            res.send('error : '+ error)
          })
        })
      }else{
        res.json({error:"User already exists"})
      }
    }).catch(err=>{
      res.send('error: '+err)
    })

  }catch(e)
  {
    console.log(e);
  }
})




module.exports=router
