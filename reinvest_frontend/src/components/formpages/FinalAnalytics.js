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
            <h3>Cashflow:</h3>
            <h3>Cap rate:</h3>
            <h3>CoC:</h3>
            <hr></hr>
            <h4>Rental Income: </h4>
            <h4>Expenses: </h4>
            <h4>Loan Details: </h4>

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
          <Analysis/>
        </Container>
      </>
    );
  }
  
  export default FinalAnalytics;
  