import React from "react";
import "./formpages.css";
import Form from "./Form";
import Navb from "../Signedout/Navbar"; //importing from navbar.js?
import FormSideBar from "./FormSideBar";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Formpage(props) {
  return (
    <>
      <div>
        <div class="fixed-top">
          <Navb auth = {props.auth} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col sm={2}>
            <FormSideBar />
          </Col>
          <Col sm={10}>
            <Form />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Formpage;
