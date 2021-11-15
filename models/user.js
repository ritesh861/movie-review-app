const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const Schema=mongoose.Schema

const userSchema=new Schema({
  Username:{
    type:String,
  },
  email:{
    type:String
  },
  password:{
    type:String
  },
  movie_list:[{
    id:{
      type:String
    },
    movie_name:{
      type:String
    },
    poster:{
      type:String
    },
    description:{
      type:String
    },
    rated:{
      type:Number
    }
  }]
})


userSchema.methods.generateAuthToken=async function(){
  const user=this
  console.log(user);
  const token=await jwt.sign({_id:user._id.toString()},process.env.JWT)
    return token
}

const User=mongoose.model('User',userSchema)
module.exports=User
