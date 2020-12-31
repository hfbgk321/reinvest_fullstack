import React from "react";
import "./Footer.css";
import {
  Container,
  Row,
  Col
  
} from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row fluid className="footer">

        <Col sm={4} className="footer">
            <label className="labelFoot">REInvest</label>
            <i className='fab fa-typo3 labelFoot' />
        </Col>
        <Col sm={4} className="footer">
            <label className="labelFoot"t>REInvest @ 2020</label>
        </Col>
        <Col sm={4} className="footer">
            <i class='fab fa-facebook-f labelFoot' />
            <i class='fab fa-instagram labelFoot' />
            <i class='fab fa-twitter labelFoot' />  
            <i class='fab fa-linkedin labelFoot' />
        </Col>
      </Row>

    </Container>
       
  );
}

export default Footer;
