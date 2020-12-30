import React, { useState, useEffect } from "react";
import "./Signup.css";
import { Nav, Navbar } from "react-bootstrap";
import {
  Container,
  Row,
  Col,
  FormControl,
  Form,
  FormGroup,
  Button,
} from "react-bootstrap";
import { Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import Navb from "./Navbar.js";
import axios from "axios";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputslogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn,setLoggedIn] = useState(false);
  

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/api/user/signin',
    {email,password},{withCredentials:true}).then(res =>{
      console.log(res);
      if (res.status == 200){
          window.location = "http://localhost:3000/signedin"
      } else {
        console.log("Fuck off");
      }
    }).catch(err =>{
      console.log(err);
    })
  };

  return (
    
    <>
      <Navb />

      <Container fluid style={{backgroundColor:"#f1f8e8" , padding:"20%" }}>
        <div className="center">
          <Form class="centeredform">
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                class="text_field"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                class="text_field"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </Form.Group>
            <button
              class="register"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              {" "}
              Submit{" "}
            </button>
          </Form>
        </div>
        <div className="signuptext">
          <Form.Label>Not a Member?</Form.Label>{" "}
          <Link to="/signup">Sign Up Here</Link>
        </div>
      </Container>
    </>
  );
};

export default ControlledInputslogin;
