import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
let SALT = 10;

import jwt from 'jsonwebtoken';
require('dotenv').config();

export const userSchema = mongoose.Schema({
  email:{
    type: String,
    required: true,
    unique: 1,
    trim: true
  },
  password:{
    type: String,
    required: true,
    minlength:6
  },
  createdAt:{
    type:Date,
    default:Date.now()
  },
  firstName:{
    type: String,
    required: true,
  },
  lastName:{
    type: String,
    required: true
  },
  token:{
    type: String
  }
});



userSchema.pre('save',function(next){
  var user = this;

  if(user.isModified('password')){
    bcrypt.genSalt(SALT, function(err,salt){
      if(err) return next(err);

      bcrypt.hash(user.password,salt, function(err,hash){
        if(err) return next(err);
        user.password = hash;
        next();
      })
    })
  }else{
    next();
  }
})


userSchema.methods.comparePassword = function(currPassword, checkPassword){
  bcrypt.compare(currPassword,this.password,function(err,isMatch){
    if(err) return checkPassword(err);
    checkPassword(null,isMatch);
  })
}

userSchema.methods.generateToken = function(cb){
  var user = this;
  console.log(user._id);
  console.log(user.email);
  var token=jwt.sign(user._id.toHexString(),process.env.TOKEN_SECRET);
  user.token = token;
  user.save(function(err,user){
    if(err) return cb(err);
    cb(null,user);
  })
}

userSchema.statics.findByToken=function(token,cb){
  var user=this;

  jwt.verify(token,process.env.TOKEN_SECRET,function(err,decode){
      user.findOne({"_id": decode, "token":token},function(err,user){
          if(err) return cb(err);
          cb(null,user);
      })
  })
};

userSchema.methods.deleteToken=function(token,cb){
  var user= this;

  user.update({$unset : {token :1}},function(err,user){
      if(err) return cb(err);
      cb(null,user);
  })
}

