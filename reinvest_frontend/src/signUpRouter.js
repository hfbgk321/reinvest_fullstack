import {useState,useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom'
import axios from 'axios';
import Cookie from 'js-cookie';
import {loadingPage} from './loading';

import signup from "./components/Signedout/Signup";


export const SignUpRoute = ({ component: Component, ...rest }) => {

  const handleAuthVerification = async () => {
    let cookieTester = Cookie.get('auth');
    if(cookieTester == null) return false;
    axios.post('http://localhost:4000/api/user/checkLoggedIn',{auth: cookieTester},{withCredentials:true}).then(res =>{
      if(res.status === 200){
        setLog(true);
      }else{
        setLog(false);
      }
    })
  }
  const [isLog, setLog] = useState(false);
  const [route, setRoute] = useState(loadingPage);
  useEffect(()=>{
    handleAuthVerification();
    console.log(isLog);
    setTimeout(()=>{
      setRoute(<Route to = '/signup' component = {signup}/>);
    },1000)
  },isLog)

  return (
    <Route {...rest} render={(props) => (
      isLog === true ? <Redirect to = '/signedin'/>
            : route
        )} 
    />
  )
}