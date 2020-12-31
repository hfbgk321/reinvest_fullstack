import { json } from 'body-parser';
import jwt, { TokenExpiredError } from 'jsonwebtoken';
import {userSchema} from './models/user';
import mongoose from 'mongoose';
require('dotenv').config();

const User = mongoose.model('User',userSchema);

export const verifyToken = (req,res,next) =>{
  
  let token = req.body.auth;
    User.findByToken(token,(err,user)=>{
        if(err) throw err;
        if(!user) return res.status(400).json({
            message: "Invalid User"
        });

        req.token= token;
        req.user=user;
        let data = {
            ownerID: jwt.decode(req.token),
            token: token
        }
        next(data);
    })
}

