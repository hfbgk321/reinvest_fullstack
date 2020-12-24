import {propertySchema} from '../models/property';
import {verifyToken} from '../validate-token'
import mongoose from 'mongoose';

import fs from 'fs';
import path from 'path';



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

export const fetchImage = (req,res) =>{
  verifyToken(req,res,(token) =>{
    res.json({img: {
      data: fs.readFileSync(path.resolve(__dirname,'../uploads/'+req.file.filename)),
      contentType: req.file.mimetype
    }})
  })
}


export const registerProperty = (req,res) =>{
  verifyToken(req,res, (token) => {
    console.log(req.body);
    const newProperty = new Property({
      streetAddress: req.body.streetAddress,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      ownerID: token,
      img:{
        data: fs.readFileSync(path.resolve(__dirname,'../uploads/'+req.file.filename)),
        contentType: req.file.mimetype
      }
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
        res.json(property);
      });
    })
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

