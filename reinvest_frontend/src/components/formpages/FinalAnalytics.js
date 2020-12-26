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



// const Analysis = () => {
//     return(
//         <div>
//             <h1>3809 Hilton Dr, Indianapolis, Indiana, 46237</h1>
//             <img src="" height = "500" width ="500"></img>
//             <h3>Cashflow:</h3>
//             <h3>Cap rate:</h3>
//             <h3>CoC:</h3>
//             <hr></hr>
//             <h4>Rental Income: </h4>
//             <h4>Expenses: </h4>
//             <h4>Loan Details: </h4>

//         </div>
//     )
// }

const buttonGroup = (props) => {
      const [title,value] = props;
      return (
        <>
          <h1 className='buttonHeader'>{title}</h1>
          <h1 className='buttonValue'>{value}</h1>
        </>
      );
  }

  const Slide1 = (props) => {
    const [address,imageSrc,title,value] = props;
    return (
      <>
        <h1>{address}</h1>
        <Row>
          <Col sm={4}></Col>
          <Col sm={8}>
            <img src={imageSrc} alt={address}></img>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>{buttonGroup(title, value)};</Col>
          <Col sm={4}>{buttonGroup(title, value)};</Col>
          <Col sm={4}>{buttonGroup(title, value)}</Col>
          <Col sm={4}>{buttonGroup(title, value)}</Col>
        </Row>
      </>
    );
  }

const topAddressAndPicture = () => {
  return (
    <>
      <Col sm={5}>
        975 SPONGEBOB AVENUE
        {/*<Image src={}></Image>*/}
      </Col>
    </>
  )
}
  
function FinalAnalytics() {
  return (
    <>
      <div class="fixed-top">
        <MemNavB />
      </div>
      <Container fluid>
        <Row>

        </Row>
        <Row>

        </Row>
        <Row>

        </Row>
        <Row>
          
        </Row>
        <Row>
          
        </Row>
        <Row>
          
        </Row>
        <Row>
          
        </Row>
      </Container>
    </>
  );
}

  export default FinalAnalytics;