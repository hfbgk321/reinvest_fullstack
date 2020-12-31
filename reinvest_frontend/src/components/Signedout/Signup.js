import React, { useState } from "react";
import "./Signup.css";
import "./homepage.css";
import {
  Container,
  Form,
} from "react-bootstrap";
import Navb from "./Navbar.js";
import axios from "axios";


const ControlledInputs = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setPerson({ ...person, firstName: value });
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setPerson({ ...person, lastName: value });
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setPerson({ ...person, email: value });
  };

  const handlePasswordChange = (e) => {
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
    <div className="makeBackgroundGreen">
    <Navb />
      <Container fluid style={{padding:"13%", maxWidth:"70%", }}>
          <Form className="formatSignUpForm">
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
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
                type="password"
                placeholder="Enter your password"
                value={person.password}
                onChange={handlePasswordChange}
                required
              />
            </Form.Group>

            <button
              className="register"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              {" "}
              Submit{" "}
            </button>
          </Form>
      </Container>
      </div>
    </>
  );
};

export default ControlledInputs;
