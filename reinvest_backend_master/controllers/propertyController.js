import {propertySchema} from '../models/property';
import {verifyToken} from '../validate-token'
import mongoose from 'mongoose';

import fs from 'fs';
import path from 'path';
import { Console } from 'console';


const Property = mongoose.model("Property",propertySchema);

export const getProperties = async (req,res) =>{
  verifyToken(req,res, (data) =>{
    Property.find({ownerID:data.ownerID},async (err,properties) =>{
      if(err){
        res.send({message:err});
      }
      res.json(properties);
    });
  })
}

export const getPropertiesByQuery = async (req,res) =>{
  verifyToken (req,res,(data) =>{
    Property.find({ownerID: data.ownerID,streetAddress: {$regex: req.body.query, $options :"i"}},(err,properties)=>{
      if(err){
        return res.status(400).json({message: err});
      }
      return res.json(properties);
    })
  })
}

export const registerProperty = (req,res) =>{
  verifyToken(req,res, (data) => {
    console.log(req.file == undefined);
    if(req.file == undefined) {
      console.log('cREATING.. undefined');
      Property.create({
        ownerID: data.ownerID,
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
        ownerID: data.ownerID,
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
  verifyToken(req,res, (data)=>{
    console.log(data.ownerID);
    console.log(req.params.id);
    Property.findById(req.params.id,(err, property) =>{
      if(err){
        console.log(err);
        return res.status(400).json({message: err});
      }
      console.log('good')
      return res.json(property);
    })
  })
  
}

export const deleteProperty = async (req,res) =>{
  verifyToken(req,res, (data) =>{
    Property.findOneAndDelete(req.params.id,{useFindAndModify:false} ,(err,property) =>{
      if(err){
        res.send({message: err});
      }
      res.json({message: 'Successfully deleted property at '+property.streetAddress});
    })
  })
  
}

export const updatePropertyInformation = async (req, res) =>{
  verifyToken(req,res, (data) =>{
    Property.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true,useFindAndModify:false},(err,property) =>{
      if(err){
        res.send('Error: '+err);
      }
      res.json(property);
    })
  })
}

