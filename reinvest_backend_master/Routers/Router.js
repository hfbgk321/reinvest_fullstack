import {getProperties,getPropertyById,registerProperty,deleteProperty,updatePropertyInformation,getPropertiesByQuery} from '../controllers/propertyController';

import {userSignUp,userLogIn,userLogOut,deleteUser,checkLoggedIn} from '../controllers/userController';
import fs from 'fs';
import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
  destination: (req,file,cb) =>{
    if(!fs.existsSync('./uploads')){
      fs.mkdirSync('./uploads');
    }
    cb(null, path.join('uploads'));
  },
  filename: (req,file,cb) =>{
    cb(null,file.originalname +'-'+Date.now())
  }
});

var uploads = multer({
  storage:storage,
});

export const Routes = (app) => {
  app.route('/').get((req,res) =>{
    res.send('Hello to reinvest API');
  })
  app.route('/properties/all').post(getProperties);
  app.route('/properties/query').post(getPropertiesByQuery);

  app.route('/properties/:id').post(getPropertyById);

  app.post('/properties',uploads.single('image'),registerProperty);

  app.route('/properties/:id').delete(deleteProperty);

  app.route('/properties/:id').put(updatePropertyInformation);
  
  app.post('/api/user/signup',uploads.none(),userSignUp);
  app.post('/api/user/signin',uploads.none(),userLogIn);

  app.route('/api/user/signout').post(userLogOut);
  app.route('/api/user/delete').delete(deleteUser);
  app.route('/api/user/checkLoggedIn').post(checkLoggedIn);
}
