const express=require('express')
const router=express.Router()
const {search_movie,search_movie_by_id}=require('../function.js')
const auth=require('../middleware/auth.js')
const User=require('../models/User')


//search movie by description

router.get('/',auth, async(req,res)=>{
  const movie_name=req.body.movie;

  search_movie(movie_name,(err,result)=>{
    if(err){
      res.json({error:err})
    }else{
      res.json(result)
    }
  })
})

//search movie by id

router.get('/id/:id',auth, async(req,res)=>{
  const movie_id=req.params.id;
  search_movie_by_id(movie_id,(err,result)=>{
    if(err){
      res.json({error:err})
    }else{
      res.json(result)
    }
  })
})



module.exports=router
