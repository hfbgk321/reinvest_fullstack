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
        <Container fluid>
        <br/>
        <br/>
        <br/>
        <Col sm>
          <h1 class="heading">{props.data.streetAddress}</h1>
        </Col>
        <Row>
          <Col sm>
            <img
              class="center_default"
              src={StockHouseImage}
<<<<<<< HEAD
=======
              width="20%"
              margin="auto"
>>>>>>> 46c8da7de431a3b49659f0d517e6ea0e7043fae8
              alt="975 SPONGEBOB AVENUE"
            ></img>
          </Col>
        </Row>
        <br/>
        <div class="center">
        <Row sm>
          <Col>{buttonGroup({ title: "CASH NEEDED", value:"$"+ (props.data.purchasePrice - props.data.loanAmount)})}</Col>
          <Col>{buttonGroup({ title: "CASH FLOW", value: "$"+(props.data.monthlyCashFlow)+"/ mo" })}</Col>
          <Col>{buttonGroup({ title: "CAP RATE", value: props.data.capitalizationRate +" %" })}</Col>
          <Col>{buttonGroup({ title: "COC", value: props.data.cashOnCash+" %" })}</Col>
        </Row>
        </div>
      </Container>
    );
  } else {
    const buffer = props.data.img.data.data;
    const b64 = new Buffer.from(buffer).toString('base64');
    const mimeType = props.data.img.contentType;
    return (
      <Container fluid>
        <br/>
        <br/>
        <br/>
        <Col sm>
          <h1 class="heading">{props.data.streetAddress}</h1>
        </Col>
        <Row>
          <Col sm>
            <div class="imgdiv">
              <img
                class="center_default"
                // src={unknown}
                src={`data:${mimeType};base64,${b64}`}
                alt="975 SPONGEBOB AVENUE"
              ></img>
            </div>
          </Col>
        </Row>
        <br/>
        <Row sm>
          <Col>{buttonGroup({ title: "CASH NEEDED", value:"$"+ (props.data.purchasePrice - props.data.loanAmount)})}</Col>
          <Col>{buttonGroup({ title: "CASH FLOW", value: "$"+(props.data.monthlyCashFlow)+"/ mo" })}</Col>
          <Col>{buttonGroup({ title: "CAP RATE", value: props.data.capitalizationRate +" %" })}</Col>
          <Col>{buttonGroup({ title: "COC", value: props.data.cashOnCash+" %" })}</Col>
        </Row>
      </Container>
    );
  }
}

  const Slide2 = (props) => {
    //const [address,imageSrc,title,value] = props;
    return (
      <div class="center">
        <Col sm>
          <h2>Purchase and Rehab</h2>
        </Col>
        <br/>
        <Row>
          <Col sm={4}>
            <h4>Rental Income</h4>
            <RentalIncomeDonut data = {props.data} />
          </Col>
          <Col sm={4}>
            <h4>Expenses</h4>
            <MonthlyExpensesDonut data = {props.data}/>
          </Col>
          <Col sm={4}>
            <h4>Loan details</h4>
            <LoanDetailsDonut data = {props.data}/>
          </Col>
        </Row>
      </div>
    );
  }

  const Slide3 = (props) => {
    //const [address,imageSrc,title,value] = props;
    return (
      <div class="center">
        <Row>
          <Col sm>
          <h2>Cash Flow</h2>
          </Col>
        </Row>
        <br/>
        <Row sm>
          <Chart/>
        </Row>
        <br/>
        <Row>
          <Col sm>
            <div class="Col box3">Cash Flow: <br></br> ${props.data.monthlyCashFlow} /Month</div>
          </Col>
          <Col sm>
            <div class="Col box3">CoC Roi: <br></br> {props.data.cashOnCash}%</div>
          </Col>
          <Col sm>
            <div class="Col box3">Monthly Income: <br></br> ${props.data.monthlyIncome}/Month</div>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm>
            <div class="Col box3">Expenses: <br></br> ${props.data.totalExpenses}/Month</div>
          </Col>
          <Col sm>
            <div class="Col box3">5 Year Annualized Return <br></br> 9.58%</div>
          </Col>
          <Col sm>
            <div class="Col box3">Mortgage Payment <br></br> ${props.data.monthlyFixedMorgage} /mo</div>
          </Col>
        </Row>
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
        <Row>
          <Col sm={12}>
            <h2>Monthly Expenses</h2>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm>
            <MonthlyExpensesPie data = {props.data} />
          </Col>
        </Row>
        <br/>
        <Row sm>
          <Col className="Col box1">
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
                <Row> ${parseFloat(((props.data.grossMonthlyIncome*(props.data.managementFees/100)) +
                        (props.data.grossMonthlyIncome*(props.data.repairsAndMaintenence/100)) +
                        (props.data.grossMonthlyIncome*(props.data.capitalExpenditures/100)) + 
                        (props.data.grossMonthlyIncome*(props.data.vacancy/100)))).toFixed(2)} </Row>
              </div>
              </Row>
            </Col>

            <Col className="Col box1">
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
            </Col>

            <Col className="Col box1">
              <Row>
              <div class="column">
                <Row>Variable Expense </Row>
                <Row>Vacancy</Row>
                <Row>Maintenance</Row>
                <Row>CapEx</Row>
                <Row>Management fee</Row>
              </div>
              <div class="column">
                <Row> ${parseFloat(variableExpense().toFixed(2))} </Row>
                <Row> ${parseFloat((props.data.grossMonthlyIncome*(props.data.vacancy/100)).toFixed(2))}</Row>
                <Row> ${parseFloat((props.data.grossMonthlyIncome*(props.data.repairsAndMaintenence/100)).toFixed(2))}</Row>
                <Row> ${parseFloat((props.data.grossMonthlyIncome*(props.data.capitalExpenditures/100)).toFixed(2))}</Row>
                <Row> ${parseFloat((props.data.grossMonthlyIncome*(props.data.managementFees/100)).toFixed(2))}</Row>
              </div>
              </Row>
            </Col>
        </Row>
        <Row sm>
          <Col sm>
            <div class="Col box">5 Year Annualized Return <br></br> 9.58%</div>
          </Col>
          <Col sm>
            <div class="Col box">Mortgage Payment <br></br> ${props.data.monthlyFixedMorgage} /mo</div>
          </Col>
        </Row>
        </div>
      
    );
  }

  const ReturnToPropertiesButton = () => {
    return (
      <div class="center fixed-bottom">
        <Row sm>
         <Col sm>
          <Button onClick={()=>{window.location = "http://localhost:3000/signedIn"}} variant="dark">Back to Properties</Button>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col sm>
          <Button variant="dark" onClick ={(e)=>{
              e.preventDefault();
              Cookies.set('redirect_link','/finalanalytics');
              window.location = '/propertyinfo'
          }}>Update</Button>
          </Col>
        </Row>
        <br/>
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
        <Container fluid>
          <Row>
            <Slide1 data = {data}/>
          </Row>
  
          <br/>
          <br/>
          <br/>
          <br/>
  
          <Row>
            <Slide2 data = {data}/>
          </Row>
  
          <br/>
          <br/>
          <br/>
          <br/>
  
          <Row>
            <Slide3 data = {data}/>
          </Row>
  
          <br/>
          <br/>
          <br/>
          <br/>
  
          <Row>
            <Slide4 data = {data}/>
          </Row>
  
          <br/>
          <br/>
  
          <Row sm>
            <ReturnToPropertiesButton/> 
          </Row>
  
          <br/>
          <br/>
  
        </Container>
      </>
    );
  }

  export default FinalAnalytics;