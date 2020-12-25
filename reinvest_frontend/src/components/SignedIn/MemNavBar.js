import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Container, Row, Col, Image } from "react-bootstrap";
import { BrowserRouter, Route, Switch, Link as Router } from "react-router-dom";
import axios from 'axios'

function MemNavB() {
  const handleClick = (e) => {
    axios
      .get("http://localhost:4000/api/user/signout",{withCredentials:true})
      .then((res) => {
        console.log(res);
        console.log(res.data);
        window.location = "http://localhost:3000/";
      })
      .catch((err) => {
        console.log(err + " not signed out ");
      });
  }

  return (
    <>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="clear" variant="light">
          <Navbar.Brand href="/signedIn" style={{ color: "#CA2B69" }}>
            FLOW
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              style={{ background: "none" }}
              className="mr-auto"
              style={{ bg: "none" }}
            ></Nav>
            <Nav style={{ background: "none" }}>
              <Nav.Link eventKey={2} href="/signedIn" style={{ color: "#CA2B69" }}>
                Home
              </Nav.Link>
              <Nav.Link eventKey={2} href="/signedIn" style={{ color: "#CA2B69" }}>
                Properties
              </Nav.Link>
              <Nav.Link eventKey={2} href="/signedIn" style={{ color: "#CA2B69" }}>
                Notifications
              </Nav.Link>
              <Nav.Link onClick={handleClick} eventKey={2} style={{ color: "#CA2B69" }}>
                Sign Out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default MemNavB;
