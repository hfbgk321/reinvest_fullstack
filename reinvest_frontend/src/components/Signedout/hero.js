import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './hero.css'

const Hero = () => {
  return (
  
        <div className="headingRow">
         
        <Row className='heroStyles'>

          <Col className="titleText" sm={12}>
            
                {" "}
                "REINVEST WITH US"{" "}
              </Col>
              
              <Col className="descText" sm={12}>
                Reinvest is a calculator designed to help evaluate investment
                properties.
              </Col>
              <Col className="descText" sm={12}>
                With clear visualizations and concise data output, you can get a
                world-class evaluation for free!
              </Col>
              <Col className='heroStyles'>
              <br></br>
              <Link to="/signedin" className="buttonStart">
                Start Here
              </Link>
              </Col>
              </Row>
    </div>
    
  )


}

export default Hero;