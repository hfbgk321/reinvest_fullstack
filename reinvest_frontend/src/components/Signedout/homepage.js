import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navb from "./Navbar.js"; //importing from navbar.js?
import Footer from './Footer';
import Hero from "./hero";
import Cards from './Cards'
import './homepage.css'


function Homepage(props) {
  return (
    <>
    <div className="dontAllowHorizontalScrolling">
      <Navb auth={props.auth} />

      <Container fluid >
        <Row>
            <Hero></Hero>
        </Row>
        <br></br>
        <br></br>
            <Row>
          <Col>
          <Cards />
          </Col>
          
      </Row>
        
      </Container>
      <br></br>
      <br></br>
      <Row>
        <Col sm={12}>
           <Footer />
        </Col>
       
      </Row>
      </div>
    </>
  );
}

export default Homepage;
