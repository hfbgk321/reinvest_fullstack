import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Navb from "./Navbar.js"; //importing from navbar.js?
import Footer from './Footer';
import Hero from "./hero";
import Cards from './Cards'
import './homepage.css'




function Homepage(props) {
  return (
    <>
      <Navb auth={props.auth} />

      <Container fluid >
        <Row>
            <Hero></Hero>
        </Row>
        <br></br>
        <br></br>
            <Row class="cardDiv">
          <Col>
          <Cards />
          </Col>
          
      </Row>
        
      </Container>
      <br></br>
      <br></br>
      <Row class="fixed-bottom">
        <Col sm={12}>
           <Footer />
        </Col>
       
      </Row>
    </>
  );
}

export default Homepage;
