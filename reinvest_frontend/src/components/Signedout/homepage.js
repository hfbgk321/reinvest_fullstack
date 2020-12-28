import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./homepage.css";
import Navb from "./Navbar.js"; //importing from navbar.js?
import Footer from './Footer';
import img9 from "../../images/img-9.jpg";




function Homepage(props) {
  return (
    <>
      <Navb auth={props.auth} />

      <Container fluid>
        <br />
        <br />
        <br />
        <Row>
          <Col sm={6}>
            <Row>
              <Col className="titleText" sm={10}>
                {" "}
                "reinvest with us"{" "}
              </Col>
            </Row>
            <br />
            <Row>
              <Col className="descText" sm={10}>
                Reinvest is a calculator designed to help evaluate investment
                properties.
              </Col>
            </Row>
            <br />
            <Row>
              <Col className="descText" sm={10}>
                With clear visualizations and concise data output, you can get a
                world-class evaluation for free!
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <Row>
              <Link to="/signedin" className="buttonStart">
                Start Here
              </Link>
            </Row>
          </Col>
          <Col sm={6}>
            <Image className="img9" src={img9} alt=""></Image>
          </Col>
        </Row>
      </Container>
      <div class="fixed-bottom">
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
