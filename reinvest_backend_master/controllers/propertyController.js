import {propertySchema} from '../models/property';
import {verifyToken} from '../validate-token'
import mongoose from 'mongoose';

import fs from 'fs';
import path from 'path';
import { Console } from 'console';


const Property = mongoose.model("Property",propertySchema);

export const getProperties = async (req,res) =>{
  verifyToken(req,res, (token) =>{
    Property.find({ownerID:token},async (err,properties) =>{
      if(err){
        res.send({message:err});
      }
      res.json(properties);
    });
  })
}

export const registerProperty = (req,res) =>{
  verifyToken(req,res, (token) => {
    console.log(req.file == undefined);
    delete req.body.auth;
    if(req.file == undefined) {
      console.log('cREATING..');
      Property.create({
        ownerID: token,
        ...req.body
      },(err,property)=>{
        if(err){
          console.log(err);
          return res.json({message: err})
        }
        console.log('Success creation');
        return res.json(property);
      })
    }
    else if(req.file.mimetype != "image/png" && req.file.mimetype != "image/jpg" && req.file.mimetype != "image/jpeg"){
      const directory = path.resolve(__dirname,'../uploads/');
      fs.readdir(directory, (err, files) => {
        if (err) throw err;
      
        for (const file of files) {
          fs.unlink(path.join(directory, file), err => {
            if (err) throw err;
          });
        }
      });
      return res.json({error: 'Only .png, .jpg and .jpeg format allowed!'})
    }else{
      const newProperty = new Property({
        img:{
          data: fs.readFileSync(path.resolve(__dirname,'../uploads/'+req.file.filename)),
          contentType: req.file.mimetype
        },
        ownerID: token,
        ...req.body      
      });
      
      Property.create(newProperty,(err,property) =>{
        if(err){
          res.send({message: err});
        }
        const directory = path.resolve(__dirname,'../uploads/');
        fs.readdir(directory, (err, files) => {
          if (err) throw err;
        
          for (const file of files) {
            fs.unlink(path.join(directory, file), err => {
              if (err) throw err;
            });
          }
          return res.json(property);
        });
      })
    }
  })
}


export const getPropertyById = async (req,res) =>{
  verifyToken(req,res, (token)=>{
    Property.find({ownerId: token,id:req.params.id},(err, property) =>{
      if(err){
        res.send({message: err});
      }
      res.json(property);
    })
  })
  
}

export const deleteProperty = async (req,res) =>{
  verifyToken(req,res, (token) =>{
    Property.findOneAndDelete(req.params.id,{useFindAndModify:false} ,(err,property) =>{
      if(err){
        res.send({message: err});
      }
      res.json({message: 'Successfully deleted property at '+property.streetAddress});
    })
  })
  
}

export const updatePropertyInformation = async (req, res) =>{
  verifyToken(req,res, (token) =>{
    Property.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true,useFindAndModify:false},(err,property) =>{
      if(err){
        res.send('Error: '+err);
      }
      res.json(property);
    })
  })
}

