import React, { useState, useEffect } from "react";
import "./Signup.css";
import "./homepage.css";
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
import Navb from "./Navbar.js";
import axios from "axios";
import { Route, Link, BrowserRouter, Redirect } from "react-router-dom";

// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleFirstNameChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, firstName: value });
  };

  const handleLastNameChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, lastName: value });
  };

  const handleEmailChange = (e) => {
    const name = e.target.value;
    const value = e.target.value;
    setPerson({ ...person, email: value });
  };

  const handlePasswordChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, password: value });
  };

  const handleSubmit = (e) => {
    console.log(person);
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/user/signup", { ...person })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        window.location = "http://localhost:3000/login";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <>
      <Navb />
      <Container fluid style={{backgroundColor:"#f1f8e8" , padding:"13%" }}>
        <div className="center">
          <Form class="centeredform">
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                class="text_field"
                type="string"
                placeholder="Enter your first name"
                value={person.firstName}
                onChange={handleFirstNameChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                class="text_field"
                type="string"
                placeholder="Enter your last lame"
                value={person.lastName}
                onChange={handleLastNameChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                class="text_field"
                type="email"
                placeholder="Enter your email"
                value={person.email}
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
                value={person.password}
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
      </Container>
    </>
  );
};

export default ControlledInputs;
