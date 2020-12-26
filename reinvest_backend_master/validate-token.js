import { json } from 'body-parser';
import jwt from 'jsonwebtoken';
import {userSchema} from './models/user';
import mongoose from 'mongoose';
require('dotenv').config();

const User = mongoose.model('User',userSchema);

export const verifyToken = (req,res,next) =>{
  // const token = req.header("Authorization");
  // const auth_id = token.split(' ')[1];
  // console.log(auth_id)
  // if(!token) return res.status(401).json({error: "Access Denied"});
  // try{
  //   const verified = jwt.verify(auth_id,process.env.TOKEN_SECRET);
  //   req.user = verified;
  //   const data = jwt.decode(auth_id,{json:true});
  //   next(data);
  // }catch(err){
  //   res.status(400).json({error:"Token is not valid"});
  // }
  let token = req.body.auth;
  console.log(token);
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
