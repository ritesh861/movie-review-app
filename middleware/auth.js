const jwt =require('jsonwebtoken')
const User=require('../models/User')
const path =require('path')

const auth =async(req,res,next)=>{
  try{
    const token= await req.cookies['jwt'];
    if(!token)
    {
      throw new Error()

    }
    const decoded=await jwt.verify(token,process.env.JWT)
    const user =await User.findOne({_id:decoded._id})
    if(!user){
      throw new Error()
    }
    req.user=user
    next()
  }catch(e){
    res.send(e)
  }
}

module.exports=auth
