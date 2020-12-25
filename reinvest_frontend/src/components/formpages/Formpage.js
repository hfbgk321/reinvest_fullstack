import React from "react";
import ReactDOM from "react-dom";
import "./formpages.css";
import Form from "./Form";
import MemNavB from "../SignedIn/MemNavBar";
import FormSideBar from "./FormSideBar";
import {
  Container,
  Row,
  Col,
  FormControl,
  FormGroup,
  Button,
} from "react-bootstrap";

function Formpage() {
  return (
    <>
      <div>
        <div class="fixed-top">
          <MemNavB />
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
