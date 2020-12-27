import React from "react";
import ReactDOM from "react-dom";
import "./formpages.css";
import Navb from "../Signedout/Navbar"; //importing from navbar.js?
import {
  Container,
  Row,
  Col,
  FormControl,
  FormGroup,
  Button,
} from "react-bootstrap";
import unknown from "../../images/unknown.png";
//import '/FinalAnalytsics.css';
import {Line} from "react-chartjs-2";
import Chart from "./LineChart";
import MonthlyExpensesPie from "./PieChart";
import DonutChart from "./DonutChart";



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

//CHarts


const getJSONStuff = () => {
  const jsonData = {};
}



const buttonGroup = (props) => {
      const {title,value} = props;
      return (
        <>
          <h1 className='buttonHeader'>{title}</h1>
          <h1 className='buttonValue'>{value}</h1>
        </>
      );
  }

  const Slide1 = (props) => {
    //const [address,imageSrc,title,value] = props;
    return (
      <Col>
        {/* <h1>{address}</h1> */}
        <h1>975 SPONGEBOB AVENUE</h1>
        <Row>
          <Col sm = {1}></Col>
          <Col>
            {/* <img src={imageSrc} alt={address}></img> */}
            <img
              class ="center"
              // src={unknown} 
              src = "https://ca-times.brightspotcdn.com/dims4/default/4687cfb/2147483647/strip/true/crop/2000x1125+0+0/resize/1486x836!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F4d%2Ff8%2F0a8a32e3c033cc1bec95dce5ca7b%2Fla-fi-hp-hotprop-pictures-20190119-001"
              width="70%"
              margin= "auto"
              alt="975 SPONGEBOB AVENUE"
            ></img>
          </Col>
          <Col sm = {1}></Col>
        </Row>
        <Row>
          {/* <Col sm={4}>{buttonGroup(title, value)};</Col>
          <Col sm={4}>{buttonGroup(title, value)};</Col>
          <Col sm={4}>{buttonGroup(title, value)}</Col>
          <Col sm={4}>{buttonGroup(title, value)}</Col> */}
          <Col sm={3}>
            {buttonGroup({ title: "CASH NEEDED", value: "$30,000" })}
          </Col>
          <Col sm={3}>
            {buttonGroup({ title: "CASH FLOW", value: "$696 / mo" })}
          </Col>
          <Col sm={3}>
            {buttonGroup({ title: "CAP RATE", value: "10.1 %" })}
          </Col>
          <Col sm={3}>{buttonGroup({ title: "COC", value: "24.1 %" })}</Col>
        </Row>
      </Col>
    );
  }

  const Slide2 = (props) => {
    //const [address,imageSrc,title,value] = props;
    return (
      <div>
        <Row>
          <Col sm={1}></Col>
          <h1>Purchase and Rehab</h1>
        </Row>
        <Row>
          <Col sm={4}>
            <h1>Rental Income</h1>
            <DonutChart/>
          </Col>
          <Col sm={4}>
            <h1>Expenses</h1>
            <DonutChart/>
          </Col>
          <Col sm={4}>
            <h1>Loan details</h1>
            <DonutChart/>
          </Col>
        </Row>
      </div>
    );
  }

  const Slide3 = (props) => {
    //const [address,imageSrc,title,value] = props;
    return (
      <div>
        <Row>
          <Col sm={1}></Col>
          <h1>Cash Flow</h1>
        </Row>
        <Row>
          <Col md="auto">
            <Chart/>
          </Col>

          <Col>
            <Row><Col sm={1}></Col>Monthly Cash Flow: $500</Row>
            <Row>
              <Col sm={4}>Income: <br></br> $1000</Col>
              <Col sm={4}>Expenses: <br></br> $500</Col>
              <Col sm={4}>CoC Roi: <br></br> 5.05%</Col>
            </Row>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col sm={3}></Col>
          <Col sm={3}>5 Year Annualized Return <br></br> 9.58%</Col>
          <Col sm={3}>Mortgage Payment <br></br> $1028 /mo</Col>
          <Col sm={3}></Col>
        </Row>
      </div>
    );
  }

  const Slide4 = (props) => {
    //const [address,imageSrc,title,value] = props;
    return (
      <div>
        <Row>
          <Col sm={1}></Col>
          <h1>Monthly Expenses Breakdown</h1>
        </Row>
        <Row>
          <Col md="auto">
            <MonthlyExpensesPie/>
          </Col>

          <Col >
          <Row>
              <Col md="auto">
              <Row>
                <Col >
                  <Row>Total Expense </Row>
                  <Row>Mortgage</Row> 
                  <Row>Taxes</Row>
                  <Row>Insurance</Row>
                  <Row>Variable expenses</Row>
                  <Row>Fixed expenses</Row>
                </Col>
                <Col>
                  <Row><h3>$2239</h3> </Row>
                  <Row>$1,540</Row>
                  <Row>$329</Row>
                  <Row>$75</Row>
                  <Row>$295</Row>
                  <Row>$0</Row>
                </Col>
                </Row>
              </Col>

              <Col md="auto">
                <Row>
                <Col>
                <Row>Fixed Expense </Row>
                <Row>Electricity</Row>
                <Row>Gas</Row>
                <Row>Water & Sewer</Row>
                <Row>HOA fees</Row>
                <Row>Garbage</Row>
                </Col>
                <Col>
                  <Row><h3>$0</h3> </Row>
                  <Row>$0</Row>
                  <Row>$0</Row>
                  <Row>$0</Row>
                  <Row>$0</Row>
                  <Row>$0</Row>
                </Col>
                </Row>
              </Col>

              <Col md="auto">
                <Row>
                <Col>
                  <Row>Variable Expense </Row>
                  <Row>vacancy</Row>
                  <Row>Maintenance</Row>
                  <Row>CapEx</Row>
                  <Row>Management fee</Row>
                </Col>
                <Col>
                  <Row><h3>$295</h3> </Row>
                  <Row>$55</Row>
                  <Row>$55</Row>
                  <Row>$0</Row>
                  <Row>$184</Row>
                </Col>
                </Row>
              </Col>
              </Row>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col sm={3}></Col>
          <Col sm={3}>5 Year Annualized Return <br></br> 9.58%</Col>
          <Col sm={3}>Mortgage Payment <br></br> $1028 /mo</Col>
          <Col sm={3}></Col>
        </Row>
      </div>
    );
  }
  
function FinalAnalytics() {
  return (
    <>
    <div>
      <div class="fixed-top">
        <Navb />
      </div>
    </div>
    <div>
      <Container fluid>
        <Row>
          <Col sm={2}></Col>
          <Slide1/>
        </Row>

        <br></br>
        <hr/>
        <br></br>

        <Row>
          <Col sm={2}></Col>
          <Slide2/>
        </Row>

        <br></br>
        <hr/>
        <br></br>
          
        <Row>
          <Col sm={3}></Col>
          <Slide3/>
        </Row>

        <br></br>
        <hr/>
        <br></br>

        <Row>
          <Col sm={2}></Col>
          <Slide4/>
        </Row>

        <br></br>
        <hr/>
        <br></br>

      </Container>
      </div>
    </>
  );
}

  export default FinalAnalytics;