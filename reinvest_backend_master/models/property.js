const mongoose = require('mongoose');
export const propertySchema = new mongoose.Schema({
  streetAddress:{
    type: String,
    required: true
  },
  city:{
    type:String,
    required: true
  },
  state:{
    type: String,
    required: true,
  },
  zipCode:{
    type: Number,
    required:true
  },
  ownerID:{
    type: String,
    required:true
  },
  img:{
    data: Buffer,
    contentType: String,
  }
})
