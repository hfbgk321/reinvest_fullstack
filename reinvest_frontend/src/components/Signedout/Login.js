import React, { useState} from "react";
import "./Signup.css";
import {
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import { Link} from "react-router-dom";
import Navb from "./Navbar.js";
import axios from "axios";

const ControlledInputslogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

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
      if (res.status === 200){
          window.location = "http://localhost:3000/signedin"
      } else {
        console.log("Not Logged In");
      }
    }).catch(err =>{
      console.log(err);
    })
  };

  return (
    
    <>
    <div className="makeBackgroundGreen">
      <Navb />
      <Container fluid style={{padding:"15%", maxWidth:"70%" }}>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
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
                type="password"
                placeholder="Enter your password"
                value={password}
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
          <br/>
          <br/>
        <Row sm>
          <Col sm>
            <Form.Label>Not a Member?</Form.Label>{" "}
            <Link to="/signup">Sign Up Here</Link>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default ControlledInputslogin;
