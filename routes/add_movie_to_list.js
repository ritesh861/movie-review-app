const express=require('express')
const router=express.Router()
const auth=require('../middleware/auth.js')
const User=require('../models/User')


//add movie to personal movie_list

router.post('/',auth, async(req,res)=>{
try{
  const new_movie={
    id:req.body.id,
    movie_name:req.body.movie_name,
    poster:req.body.poster,
    description:req.body.description,
    rated:req.body.rated
  }
  req.user.movie_list.push(new_movie)
  req.user.save().then(()=>{
    res.send(`${JSON.stringify(new_movie)} has been added`)
  })
}catch(err){
  res.send(err)
}
})



module.exports=router
