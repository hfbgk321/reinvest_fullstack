import {getProperties,getPropertyById,registerProperty,deleteProperty,updatePropertyInformation} from '../controllers/propertyController';

import {userSignUp,userLogIn,userLogOut,deleteUser} from '../controllers/userController';


export const Routes = (app) => {
  app.route('/properties').get(getProperties);

  app.route('/properties/:id').get(getPropertyById);

  app.route('/properties').post(registerProperty);

  app.route('/properties/:id').delete(deleteProperty);

  app.route('/properties/:id').put(updatePropertyInformation);

  app.route('/api/user/signup').post(userSignUp);
  app.route('/api/user/signin').post(userLogIn);
  app.route('/api/user/signout').get(userLogOut);
  app.route('/api/user/delete').delete(deleteUser);
}
