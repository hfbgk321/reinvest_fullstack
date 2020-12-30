import React, { useEffect,useState } from "react";
import ReactDOM from "react-dom";
//import "./formpages.css";
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
import LoanDetailsDonut from "./LoanDetailsDonut";
import axios from 'axios';
import Cookies, { set } from 'js-cookie';

import {loadingPage} from '../../loading';
import StockHouseImage from '../../images/stockHouse.jpg';



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
    if (props.data.img == undefined){
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
              class="center_default"
              // src={unknown}
              src={StockHouseImage}
              width="20%"
              margin="auto"
              alt="975 SPONGEBOB AVENUE"
            ></img>
          </Col>
        </Row>
        <div class="center">
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
        </div>
      </Col>
    );
  } else {

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
        <div class="center">
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
        </div>
      </Col>
    );
  }
}

  const Slide2 = (props) => {
    //const [address,imageSrc,title,value] = props;
    return (
      <div class="center">
        <Row>
          <Col sm={1}></Col>
          <h1>Purchase and Rehab</h1>
        </Row>
        <Row>
          <Col sm={4}>
            <h3>Rental Income</h3>
            <RentalIncomeDonut data = {props.data} />
          </Col>
          <Col sm={4}>
            <h3>Expenses</h3>
            <MonthlyExpensesDonut data = {props.data}/>
          </Col>
          <Col sm={4}>
            <h3>Loan details</h3>
            <LoanDetailsDonut data = {props.data}/>
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
      <div class="center">
        <Row>
          <Col sm={1}></Col>
          <h1>Cash Flow</h1>
        </Row>
        <Row>
          
          <Col>
            <Chart/>
          </Col>

          <div class="Col center">
            <Row>
              <div class="Col box3">Cash Flow: <br></br> ${props.data.monthlyCashFlow} /Month</div>
              <div class="Col box3">CoC Roi: <br></br> {props.data.cashOnCash}%</div>
              <div class="Col box3">Monthly Income: <br></br> ${props.data.monthlyIncome}/Month</div>
            </Row>
            <Row>
              <div class="Col box3">Expenses: <br></br> ${props.data.totalExpenses}/Month</div>
              <div class="Col box3">5 Year Annualized Return <br></br> 9.58%</div>
              <div class="Col box3">Mortgage Payment <br></br> ${props.data.monthlyFixedMorgage} /mo</div>
            </Row>
          </div>
        </Row>
        <br></br>
        <br></br>
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
    const variableExpense = () => {
      let result = ((props.data.grossMonthlyIncome*(props.data.managementFees/100)) +
      (props.data.grossMonthlyIncome*(props.data.repairsAndMaintenence/100)) +
      (props.data.grossMonthlyIncome*(props.data.capitalExpenditures/100)) + 
      (props.data.grossMonthlyIncome*(props.data.vacancy/100)) );  //unsure about the calculation of vacancy
      return result;
    }
    const fixedExpense = () => {
      let result = (props.data.electricity +
        props.data.gas +
        props.data.garbage +
        props.data.waterAndSewer+ props.data.hoaFees);  //unsure about the calculation of vacancy
      return result;
    }
    return (
      <div class="center">
        <Container>
        <Row>
          <h1>Monthly Expenses</h1>
        </Row>
        <Row>
          <Col md="auto">
            <MonthlyExpensesPie  data = {props.data} />
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
              <div class="Col box1">
                <Row>
                <div class="column">
                  <Row>Total Expense </Row>
                  <Row>Mortgage</Row> 
                  <Row>Taxes</Row>
                  <Row>Insurance</Row>
                  <Row>Fixed expenses</Row>
                  <Row>Variable expenses</Row>
                </div>
                <div class="column">
                  <Row> ${props.data.totalExpenses} </Row>
                  <Row> ${props.data.monthlyFixedMorgage}</Row>
                  <Row> ${parseFloat((props.data.propertyTaxes / 12).toFixed(2))}</Row>
                  <Row> ${parseFloat((props.data.insurance / 12).toFixed(2))}</Row>
                  <Row> ${fixedExpense()}</Row>
                  <Row> ${(props.data.grossMonthlyIncome*(props.data.managementFees/100)) +
                          (props.data.grossMonthlyIncome*(props.data.repairsAndMaintenence/100)) +
                          (props.data.grossMonthlyIncome*(props.data.capitalExpenditures/100)) + 
                          (props.data.grossMonthlyIncome*(props.data.vacancy/100))} </Row>
                </div>
                </Row>
              </div>

              <div class="Col box1">
                <Row>
                <div class="column">
                <Row>Fixed Expense </Row>
                <Row>Electricity</Row>
                <Row>Gas</Row>
                <Row>Water & Sewer</Row>
                <Row>HOA fees</Row>
                <Row>Garbage</Row>
                </div>
                <div class="column">
                  <Row> ${fixedExpense()}</Row>
                  <Row> ${props.data.electricity}</Row>
                  <Row> ${props.data.gas}</Row>
                  <Row> ${props.data.waterAndSewer}</Row>
                  <Row> ${props.data.hoaFees}</Row>
                  <Row> ${props.data.garbage}</Row>
                </div>
                </Row>
              </div>

              <div class="Col box1">
                <Row>
                <div class="column">
                  <Row>Variable Expense </Row>
                  <Row>Vacancy</Row>
                  <Row>Maintenance</Row>
                  <Row>CapEx</Row>
                  <Row>Management fee</Row>
                </div>
                <div class="column">
                  <Row> ${variableExpense()} </Row>
                  <Row> ${(props.data.grossMonthlyIncome*(props.data.vacancy/100))}</Row>
                  <Row> ${(props.data.grossMonthlyIncome*(props.data.repairsAndMaintenence/100))}</Row>
                  <Row> ${(props.data.grossMonthlyIncome*(props.data.capitalExpenditures/100))}</Row>
                  <Row> ${(props.data.grossMonthlyIncome*(props.data.managementFees/100))}</Row>
                </div>
                </Row>
              </div>

              </Row>
            </Container>
        </Row>
        <Row>
          <Col sm={3}></Col>
          <div class="Col box">5 Year Annualized Return <br></br> 9.58%</div>
          <div class="Col box">Mortgage Payment <br></br> ${props.data.monthlyFixedMorgage} /mo</div>
          <Col sm={3}></Col>
        </Row>
        </Container>
      </div>
    );
  }
  
function FinalAnalytics(props) {
  const [data, setData] = useState({});
  const [isLoaded,setIsLoaded] = useState(false);
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
    setTimeout(()=>{
      setIsLoaded(true);
    },2000);
    
  },data)

  console.log(data);
  

  if(!isLoaded){
     return <loadingPage/>
  }
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

      </Container>
      </div>
      <Button onClick={()=>{window.location = "http://localhost:3000/signedIn"}}>Back to Properties</Button>
    </>
  );
}

  export default FinalAnalytics;