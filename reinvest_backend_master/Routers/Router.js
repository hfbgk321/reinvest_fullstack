import {getProperties,getPropertyById,registerProperty,deleteProperty,updatePropertyInformation} from '../controllers/propertyController';

import {userSignUp,userLogIn,userLogOut,deleteUser} from '../controllers/userController';

import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
  destination: (req,file,cb) =>{
    cb(null, path.join('uploads'));
  },
  filename: (req,file,cb) =>{
    cb(null,file.originalname +'-'+Date.now())
  }
});

var uploads = multer({
  storage:storage,
  fileFilter: (req, file, cb) =>{
    if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"){
      cb(null,true);
    }else{
      cb(null,false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

export const Routes = (app) => {
  app.route('/properties').get(getProperties);

  app.route('/properties/:id').get(getPropertyById);

  app.post('/properties',uploads.single('img'),registerProperty);

  app.route('/properties/:id').delete(deleteProperty);

  app.route('/properties/:id').put(updatePropertyInformation);
  
  app.route('/api/user/signup').post(userSignUp);
  app.route('/api/user/signin').post(userLogIn);
  app.route('/api/user/signout').get(userLogOut);
  app.route('/api/user/delete').delete(deleteUser);
}