import {propertySchema} from '../models/property';
import {verifyToken} from '../validate-token'
import mongoose from 'mongoose';

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
    //console.log(token);
    const newProperty = new Property({
      streetAddress: req.body.streetAddress,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      ownerID: token
    });

    Property.create(newProperty,(err,property) =>{
      if(err){
        res.send({message: err});
      }
      res.json(property);
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

