import "./App.css";
import { Route, Link, BrowserRouter as Router, Redirect } from "react-router-dom";
import axios from 'axios';
import Cookie from 'js-cookie';
import signup from "./components/Signedout/Signup";
import login from "./components/Signedout/Login";
import HomePage from "./components/Signedout/homepage";
import signedIn from "./components/SignedIn/signedIn";
import formpage from "./components/formpages/Formpage";
import FinalAnalytics from "./components/formpages/FinalAnalytics"
import Form from './components/formpages/Form';
import {useState, useEffect} from 'react';
import {PrivateRoute} from './PrivateRouter';
import {loadingPage} from './loading';
import {LoginRoute} from './loginRouter'

import {SignUpRoute} from './signUpRouter'
import {HomePageRoute} from './HomePageRoute'



function App() {

  return (
    <>
      <Router>

        <HomePageRoute path="/" component={HomePage}/>
        {/* <Route path="/" exact component={HomePage} /> */}
        <LoginRoute path = '/login' component = {login}/>
        <SignUpRoute path = '/signup' component = {signup}/> 
        
        {/* <Route path="/signup" component={signup} /> */}
        {/* <Route path="/signedIn" component={signedIn} />  */}
        {/* <Route path="/propertyinfo" component={formpage} />  */}
        <PrivateRoute path = "/propertyinfo" component ={formpage}/>
        {/* <Route path="/finalanalytics" component={FinalAnalytics} /> */}
        <PrivateRoute path = "/finalanalytics" component ={FinalAnalytics}/>
        {/* <Route path="/Form" component={Form} /> */}
        <PrivateRoute path ="/Form" component ={Form}/>
        <PrivateRoute path = "/signedIn" component = {signedIn}/>
        {/* <Route path = "/load" component ={loadingPage}/> */}
      </Router>
    </>
  );
}

export default App;
