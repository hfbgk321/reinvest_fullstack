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




function App() {

  return (
    <>
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={login} />
        <Route path="/signup" component={signup} />
        {/* <Route path="/signedIn" component={signedIn} />  */}
        <Route path="/propertyinfo" component={formpage} /> 
        <Route path="/finalanalytics" component={FinalAnalytics} />
        <Route path="/Form" component={Form} />
        <PrivateRoute path = "/signedIn" component = {signedIn}/>
      </Router>
    </>
  );
}

export default App;
