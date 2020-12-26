import { json } from 'body-parser';
import jwt from 'jsonwebtoken';
import {userSchema} from './models/user';
import mongoose from 'mongoose';
require('dotenv').config();

const User = mongoose.model('User',userSchema);

export const verifyToken = (req,res,next) =>{
  
  let token = req.body.auth;
  console.log(req.body.auth);
  console.log(req.body);
    User.findByToken(token,(err,user)=>{
        if(err) throw err;
        if(!user) return res.json({
            isValid :false
        });

        res.json({isValid:true});

        req.token= token;
        req.user=user;
        let data = jwt.decode(req.token);
        console.log(data);
        next(data);
    })
}
