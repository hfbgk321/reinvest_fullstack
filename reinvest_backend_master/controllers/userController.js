import {userSchema} from '../models/user';
import {propertySchema} from '../models/property'
import {registerValidation,loginValidation} from '../validation';
import mongoose from 'mongoose';

import jwt, { verify } from 'jsonwebtoken';
import { verifyToken } from '../validate-token';

require('dotenv').config();

const User = mongoose.model('User',userSchema);

const Property = mongoose.model('Property',propertySchema);

export const userSignUp = async (req,res) =>{

  const {error} = registerValidation(req.body);

  if(error) return res.status(400).json({error: error.details[0].message});

  const emailExists = await User.findOne({email:req.body.email});

  if(emailExists) return res.status(400).json({message: "Email already exists"});

  const user = new User({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }).save((err,response) =>{
    if(err){
      return res.status(400).send(err);
    }
    return res.status(200).send(response);
  });
}


export const userLogIn = async (req, res) =>{
  
  //res.setHeader('Access-Control-Allow-Credentials', true);
  if(req.cookies.auth != null) 
    return res.send({message: 'You are already logged in. Please Log out before signing in again.'})
  const {error} = loginValidation(req.body);

  if(error) return res.status(400).json({error: error.details[0].message});

  User.findOne({'email':req.body.email},(err, user) =>{
    if(!user) return res.status(400).json({
      message: err
    });

    user.comparePassword(req.body.password,(err,isMatch) =>{
      if(err) throw err;
      if(!isMatch) return res.status(400).json({
        message: "Wrong Password"
      });

      user.generateToken((err,user)=>{
        if(err) return res.status(400).send(err);
        return res.status(200).cookie('auth',user.token).json({
            isAuth : true,
            id : user._id,
            email : user.email
        });
    });    
    });
  });
}

export const userLogOut = (req,res) =>{
  verifyToken(req,res,(data) => {
    User.findByToken(data.token,(err,user) =>{
      if(err) throw err
      user.deleteToken(data.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        return res.status(200).clearCookie('auth').json({
          message: "Signed Out"
        });
    });
    })
  })
}

export const deleteUser = (req,res) =>{
  verifyToken(req,res,(data) =>{
    Property.deleteMany({ownerID : data.ownerID}).then(function(){
      console.log('Data Deleted');
    }).catch(function(err){
      console.log(err);
    });
    User.findByToken(req.body.auth,(err,user) =>{
      if(err) throw err
      user.deleteToken(req.body.auth,async (err,user)=>{
        if(err) return res.status(400).send(err);
        User.findOneAndDelete(data.token,(err,data) =>{
          if(err) return res.status(400).send(err);
          return res.status(200).clearCookie('auth').json({message: 'Account deleted'});
        });
      });
    })
  })
}

export const checkLoggedIn = (req,res) =>{
  verifyToken(req,res,(data) =>{
    //console.log(Token);
    if(data.token == req.body.auth){
      console.log('Howdy');
      return res.status(200).json({message: 'Token is valid'});
    }
    console.log('no');
    return res.status(401).json({message: 'Token is not valid'});
  })
}