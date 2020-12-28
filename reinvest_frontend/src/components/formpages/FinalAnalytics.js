import React, { useEffect,useState } from "react";
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
import './FinalAnalytics.css';
import {Line} from "react-chartjs-2";
import Chart from "./LineChart";
import MonthlyExpensesPie from "./PieChart";
import RentalIncomeDonut from "./RentalIncomeDonut";
import MonthlyExpensesDonut from "./MonthlyExpensesDonut";
import axios from 'axios';
import Cookies, { set } from 'js-cookie';




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



const buttonGroup = (props) => {
      const {title,value} = props;
      return (
        <>
          <div className="box">
            
            <h1 className='buttonHeader'>{title}</h1>
            <h1 className='buttonValue'>{value}</h1>
          </div>
          
          
        </>
      );
  }

  const Slide1 = (props) => {
    //const [address,imageSrc,title,value] = props;

    const buffer = props.data.img.data.data;
    const b64 = new Buffer.from(buffer).toString('base64');
    const mimeType = props.data.img.contentType;
    return (
      <Col>
        {/* <h1>{address}</h1> */}
        <br></br>
        <br></br>
        <h1 class="heading">{props.data.streetAddress}</h1>
        <Row>
          <Col>
            {/* <img src={imageSrc} alt={address}></img> */}
            <img
              class="center"
              // src={unknown}
              src={`data:${mimeType};base64,${b64}`}
              width="70%"
              margin="auto"
              alt="975 SPONGEBOB AVENUE"
            ></img>
          </Col>
        </Row>
        <Row>
          {/* <Col sm={4}>{buttonGroup(title, value)};</Col>
          <Col sm={4}>{buttonGroup(title, value)};</Col>
          <Col sm={4}>{buttonGroup(title, value)}</Col>
          <Col sm={4}>{buttonGroup(title, value)}</Col> */}
          <Col>{buttonGroup({ title: "CASH NEEDED", value:"$"+ (props.data.purchasePrice - props.data.loanAmount)})}</Col>
          <Col>{buttonGroup({ title: "CASH FLOW", value: "$"+(props.data.monthlyCashFlow)+"/ mo" })}</Col>
          <Col>{buttonGroup({ title: "CAP RATE", value: props.data.capitalizationRate +" %" })}</Col>
          <Col>{buttonGroup({ title: "COC", value: props.data.cashOnCash+" %" })}</Col>
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
            <RentalIncomeDonut data = {props.data} />
          </Col>
          <Col sm={4}>
            <h1>Expenses</h1>
            <MonthlyExpensesDonut data = {props.data}/>
          </Col>
          <Col sm={4}>
            <h1>Loan details</h1>
            <MonthlyExpensesDonut data = {props.data}/>
          </Col>
        </Row>
      </div>
    );
  }

  // const Slide2 = (props) => {
  //     return ( 
  //       <> 
  //      <Container fluid className="containerRehab">
  //           <h1>Test</h1>
  //      </Container>

  //      </>
  //     )
  // }

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
            <Row><Col sm={1}></Col>Monthly Cash Flow: {props.data.monthlyCashFlow}</Row>
            <Row>
              <Col sm={4}>Income: <br></br> {props.data.netOperatingIncome}</Col>
              <Col sm={4}>Expenses: <br></br> {props.data.totalExpenses}</Col>
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

  const line = (props) => {
    const {title,value} = props;
    return(
      <div>
        <Row>
          <Col md="auto">
            {title}
          </Col>
          <Col>
            {value}
          </Col>
        </Row>
      </div>
    )
  }
  const Slide4 = (props) => {
    //const [address,imageSrc,title,value] = props;
    return (
      <>
        <Row>
          <Col sm={1}></Col>
          <h1>Monthly Expenses Breakdown</h1>
        </Row>
        <Row>
          <Col md="auto">
            <MonthlyExpensesPie/>
          </Col>

            {/* <Col xs={5} class="box">
              {line({ title: "Total Expense", value: "$2239" })}
              {line({ title: "Mortgage", value: "$1,540" })}
              {line({ title: "Taxes", value: "$329" })}
              {line({ title: "Insurance", value: "$75" })}
              {line({ title: "Variable expenses", value: "$295" })}
              {line({ title: "Fixed expenses", value: "$0" })}
            </Col>

            <Col xs={5} class="box">
              {line({ title: "Total Expense", value: "$2239" })}
              {line({ title: "Mortgage", value: "$1,540" })}
              {line({ title: "Taxes", value: "$329" })}
              {line({ title: "Insurance", value: "$75" })}
              {line({ title: "Variable expenses", value: "$295" })}
              {line({ title: "Fixed expenses", value: "$0" })}
            </Col>

            <Col xs={5} class="box">
              {line({ title: "Total Expense", value: "$2239" })}
              {line({ title: "Mortgage", value: "$1,540" })}
              {line({ title: "Taxes", value: "$329" })}
              {line({ title: "Insurance", value: "$75" })}
              {line({ title: "Variable expenses", value: "$295" })}
              {line({ title: "Fixed expenses", value: "$0" })}
            </Col> */}



          <Container fluid>
          <Row>
              <Col>
              <Row>
                <Col md = 'auto'>
                  <Row>Total Expense </Row>
                  <Row>Mortgage</Row> 
                  <Row>Taxes</Row>
                  <Row>Insurance</Row>
                  <Row>Variable expenses</Row>
                  <Row>Fixed expenses</Row>
                </Col>
                <Col>
                  <Row>$2239 </Row>
                  <Row>$1,540</Row>
                  <Row>$329</Row>
                  <Row>$75</Row>
                  <Row>$295</Row>
                  <Row>$0</Row>
                </Col>
                </Row>
              </Col>

              <Col>
                <Row>
                <Col md="auto">
                <Row>Fixed Expense </Row>
                <Row>Electricity</Row>
                <Row>Gas</Row>
                <Row>Water & Sewer</Row>
                <Row>HOA fees</Row>
                <Row>Garbage</Row>
                </Col>
                <Col>
                  <Row>$0</Row>
                  <Row>$0</Row>
                  <Row>$0</Row>
                  <Row>$0</Row>
                  <Row>$0</Row>
                  <Row>$0</Row>
                </Col>
                </Row>
              </Col>

              <Col>
                <Row>
                <Col md="auto">
                  <Row>Variable Expense </Row>
                  <Row>vacancy</Row>
                  <Row>Maintenance</Row>
                  <Row>CapEx</Row>
                  <Row>Management fee</Row>
                </Col>
                <Col>
                  <Row>$295 </Row>
                  <Row>$55</Row>
                  <Row>$55</Row>
                  <Row>$0</Row>
                  <Row>$184</Row>
                </Col>
                </Row>
              </Col>
              </Row>
              </Container>
        </Row>
        <Row>
          <Col sm={3}></Col>
          <Col sm={3}>5 Year Annualized Return <br></br> 9.58%</Col>
          <Col sm={3}>Mortgage Payment <br></br> $1028 /mo</Col>
          <Col sm={3}></Col>
        </Row>
      </>
    );
  }
  
function FinalAnalytics(props) {
  const [data, setData] = useState({});
  const getJSONStuff = () => {
    let propertyInfoId = localStorage.getItem('propertyInfoId');
    console.log(propertyInfoId);
    axios.post('http://localhost:4000/properties/' + propertyInfoId,{auth: Cookies.get('auth')},
    {withCredentials:true}).then(res => {
      setData(res.data);
    }).catch(err => {
      console.log(err);
    });
  }

  useEffect(async()=>{
    let hello = await getJSONStuff();
    console.log(data);
  },data)

  console.log(data);


  return (
    <>
    <div>
      <div class="fixed-top">
        <Navb auth = {props.auth}/>
      </div>
    </div>
    <div>
      <Container fluid>
        <Row>
          <Slide1 data = {data}/>
        </Row>

        <br></br>
        <hr/>
        <br></br>

        <Row>
          <Slide2 data = {data}/>
        </Row>

        <br></br>
        <hr/>
        <br></br>
          
        <Row>
          <Slide3 data = {data}/>
        </Row>

        <br></br>
        <hr/>
        <br></br>

        <Row>
          <Slide4 data = {data}/>
        </Row>

        <br></br>
        <hr/>
        <br></br>

        <br></br>
        <hr/>
        <br></br>

        <br></br>
        <hr/>
        <br></br>

        <br></br>
        <hr/>
        <br></br>

        <br></br>
        <hr/>
        <br></br>

        <br></br>
        <hr/>
        <br></br>

        <br></br>
        <hr/>
        <br></br>

        <br></br>
        <hr/>
        <br></br>

        <br></br>
        <hr/>
        <br></br>

        <br></br>
        <hr/>
        <br></br>

        <br></br>
        <hr/>
        <br></br>

        <br></br>
        <hr/>
        <br></br>

        <br></br>
        <hr/>
        <br></br>

        <br></br>
        <hr/>
        <br></br>

      </Container>
      </div>
    </>
  );
}

  export default FinalAnalytics;