import React from "react";
import ReactDOM from "react-dom";
import "./formpages.css";
import MemNavB from "../SignedIn/MemNavBar";
import {
  Container,
  Row,
  Col,
  FormControl,
  FormGroup,
  Button,
} from "react-bootstrap";



const Analysis = () => {
    return(
        <div>
            <h1>3809 Hilton Dr, Indianapolis, Indiana, 46237</h1>
            <img src="" height = "500" width ="500"></img>
        </div>
    )
}

function FinalAnalytics() {
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

        </Container>
      </>
    );
  }
  
  export default FinalAnalytics;
  