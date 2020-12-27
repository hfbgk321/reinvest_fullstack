import { json } from 'body-parser';
import jwt, { TokenExpiredError } from 'jsonwebtoken';
import {userSchema} from './models/user';
import mongoose from 'mongoose';
require('dotenv').config();

const User = mongoose.model('User',userSchema);

export const verifyToken = (req,res,next) =>{
  
  let token = req.body.auth;
  //console.log(req.body);
  //console.log(token);
    User.findByToken(token,(err,user)=>{
        if(err) throw err;
        if(!user) return res.status(400).json({message: 'Invalid User'});

        req.token= token;
        req.user=user;
        let data = jwt.decode(req.token);
        console.log(data);
        next(data);
    })
}

