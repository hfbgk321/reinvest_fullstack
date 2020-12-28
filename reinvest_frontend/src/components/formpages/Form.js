import React, { Component, useState,useEffect } from "react";
// import { useWindowScroll} from "react-use";
import Cookies from 'js-cookie';
import {
  Container,
  Row,
  Col,
  FormControl,
  Form,
  FormGroup,
  Button,
} from "react-bootstrap";
import "./Form.css";
import { Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import axios from 'axios';

import FinalAnalytics from './FinalAnalytics';

const PropertyForm = () => {
  const [propInfo, setPropInfo] = useState({
    auth: Cookies.get('auth'),
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    bedrooms: 0,
    bathrooms: 0,
    sqFt: 0,
    yearBuilt: "",
    purchasePrice: 0,
    purchaseClosingCosts: 0,
    rehabCosts: 0,
    marketValue: 0,
    loanAmount: 0,
    interestRate: 0,
    loanTerms: 0,
    grossMonthlyIncome: 0,
    annualIncomeGrowth: 0,
    propertyTaxes: 0,
    insurance: 0,
    repairsAndMaintenence: 0,
    vacancy: 0,
    capitalExpenditures: 0,
    managementFees: 0,
    electricity: 0,
    gas: 0,
    waterAndSewer: 0,
    hoaFees: 0,
    garbage: 0,
    otherFees: 0,
    annualExpensesGrowth: 0,
    taxRate: 0,
    monthlyIncome: 0,
    monthlyFixedMorgage: 0,
    monthlyCashFlow: 0,
    netOperatingIncome: 0,
    capitalizationRate: 0,
    cashOnCash: 0,
    rentToCost: 0,
    estimatedMarketValue: 0,
    totalDebtService: 0,
    debtToCoverage: 0,
    onePercentRule: false,
    priceToRent: 0,
    grossRentMultiplier: 0,
    netIncomeAfterFinancing: 0,
    roi: 0,
    auth: Cookies.get('auth')
  });

  const handleStreetAddressChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleCityChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleStateChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleZipCodeChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleBedroomsChange = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleBathroomsChange = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleSqFtChange = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleYearBuilt = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handlePurchasePrice = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handlePurchaseClosingCosts = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleRehabCosts = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handlePropertyGrowthValue = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleLoanAmount = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleInterestRate = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleLoanTerms = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleGrossMonthlyIncome = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleAnnualIncomeGrowth = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handlePropertyTaxes = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleInsurance = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleRepairsAndMaintenence = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleVacancy = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleCapitalExpenditures = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleManagementFees = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleElectricity = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleGas = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleWaterAndSewer = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleHoaFees = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleGarbage = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleOtherFees = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleAnnualExpensesGrowth = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleTaxRate = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);
    setPropInfo({ ...propInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const MonthlyIncome = () => {
      propInfo.monthlyIncome = propInfo.grossMonthlyIncome;
      return propInfo.grossMonthlyIncome;
    };
    const MonthlyFixedMorgage = () => {
      let n = propInfo.loanTerms * 12; //periods
      let P = propInfo.loanAmount; //principle
      let r = propInfo.interestRate / (12 * 100); //monthlyInterest
      let result = (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
      if (isNaN(result)) result = 0;
      result = parseFloat(result.toFixed(2));
      propInfo.monthlyFixedMorgage = result;
      return result;
    };
    const MonthlyCashFlow = () => {
      let result = NetOperatingIncome() / 12 - MonthlyFixedMorgage();
      if (isNaN(result)) result = 0;
      result = parseFloat(result.toFixed(2));
      propInfo.monthlyCashFlow = result;
      return result;
    };
    const NetOperatingIncome = () => {
      let result = (propInfo.grossMonthlyIncome -
        (propInfo.insurance / 12) -
        propInfo.otherFees -
        propInfo.hoaFees -
        (propInfo.propertyTaxes / 12) -
        (propInfo.grossMonthlyIncome*(propInfo.managementFees/100)) -
        (propInfo.grossMonthlyIncome*(propInfo.repairsAndMaintenence/100)) -
        (propInfo.grossMonthlyIncome*(propInfo.capitalExpenditures/100)) -
        propInfo.electricity -
        propInfo.gas -
        propInfo.garbage -
        propInfo.waterAndSewer) * 
      12 *
      (1 - (propInfo.vacancy / 100));
      if (isNaN(result)) result = 0;
      result = parseFloat(result.toFixed(2));
      propInfo.netOperatingIncome = result;
      return result;
    };

    const CapitalizationRate = () => {
      let result =  (propInfo.netOperatingIncome / (propInfo.purchasePrice + propInfo.rehabCosts))*100;
      if (isNaN(result)) result = 0;
      result = parseFloat(result.toFixed(2));
      propInfo.capitalizationRate = result;
      return result;
    };

    const CashOnCash = () => {
      let result = ((MonthlyCashFlow() * 12) / (propInfo.purchasePrice - 
        propInfo.loanAmount + propInfo.rehabCosts + propInfo.purchaseClosingCosts))*100;
      if (isNaN(result)) result = 0;
      result = parseFloat(result.toFixed(2));
      propInfo.cashOnCash = result;
      return result;
    };

    const RentToCost = () => {
      let result = MonthlyCashFlow() / propInfo.purchasePrice;
      if (isNaN(result)) result = 0;
      result = parseFloat(result.toFixed(2));
      propInfo.rentToCost = result;
      return result;
    };
    const EstimatedMarketValue = () => {
      let result = NetOperatingIncome() / CapitalizationRate();
      if (isNaN(result)) result = 0;
      result = parseFloat(result.toFixed(2));
      propInfo.estimatedMarketValue = result;
      return result;
    };
    const totalDebtService = () => {
      let result = propInfo.interestRate * (1 - propInfo.taxRate) + propInfo.loanAmount;
      if (isNaN(result)) result = 0;
      result = parseFloat(result.toFixed(2));
      propInfo.totalDebtService = result;
      return result;
    };
    const debtToCoverage = () => {
      let result = NetOperatingIncome() / totalDebtService();
      if (isNaN(result)) result = 0;
      result = parseFloat(result.toFixed(2));
      propInfo.debtToCoverage = result;
      return result;
    };
    const onePercentRule = () => {
      let result = (propInfo.grossMonthlyIncome)/ (propInfo.purchasePrice + propInfo.rehabCosts);
      if (isNaN(result)) result = 0;
      result = parseFloat(result.toFixed(2));
      if (result >= 0.01) result = true;
      else result = false;
      propInfo.onePercentRule = result;
      return result;
    };

    const priceToRent = () => {
      let result = propInfo.purchasePrice / (propInfo.grossMonthlyIncome * 12);
      if (isNaN(result)) result = 0;
      result = parseFloat(result.toFixed(2));
      propInfo.priceToRent = result;
      return result;
    };
    const grossRentMultiplier = () => {
      let result = propInfo.marketValue / (propInfo.grossMonthlyIncome * 12);
      if (isNaN(result)) result = 0;
      result = parseFloat(result.toFixed(2));
      propInfo.grossRentMultiplier = result;
      return result;
    };

    const NetIncomeAfterFinancing = () => {
      let result = NetOperatingIncome() - MonthlyFixedMorgage();
      if (isNaN(result)) result = 0;
      result = parseFloat(result.toFixed(2));
      propInfo.netIncomeAfterFinancing = result;
      return result;
    }
    
    const ROI = () => {
      let totalInitalInvestment = propInfo.purchasePrice + propInfo.rehabCosts;
      let newProfits = MonthlyCashFlow() * 12 * Math.abs(propInfo.annualIncomeGrowth-propInfo.annualExpensesGrowth)/100; 
      let result = newProfits/totalInitalInvestment;
      if (isNaN(result)) result = 0;
      result = parseFloat(result.toFixed(2));
      propInfo.roi = result;
      return result;
    } 

    MonthlyIncome();
    MonthlyFixedMorgage();
    MonthlyCashFlow();
    NetOperatingIncome();
    CapitalizationRate();
    CashOnCash();
    RentToCost();
    EstimatedMarketValue();
    totalDebtService();
    debtToCoverage();
    onePercentRule();
    priceToRent();
    grossRentMultiplier();
    NetIncomeAfterFinancing();
    ROI();

    console.log(propInfo);

    axios.post('http://localhost:4000/properties',
    {...propInfo},{withCredentials:true}).then(res =>{
      console.log(res.data);
      console.log(res.data._id);
      localStorage.setItem('propertyInfoId', res.data._id);
      setTimeout(() =>{
        window.location = "http://localhost:3000/finalanalytics";
      },1000);
      
    }).catch(err =>{
      console.log(err);
    })
  }



  return (
    <>
      <Container fluid>
        <div className="center1">
          <Form>
            
            <div id="Property Information" class="formblock">
            <br></br>
            <br></br>
              <h1 className="header">Property Information</h1>

              <br></br>
              <Form.Group controlId="">
                <Form.Label>
                  Street address <b className="req">*</b>
                </Form.Label>
                <Form.Control
                  name="streetAddress"
                  class="text_field"
                  type="text"
                  placeholder="Street address"
                  value={propInfo.streetAddress}
                  onChange={handleStreetAddressChange}
                
                />
              </Form.Group>

              <Row>
                <Col sm={4}>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    name="city"
                    class="text_field"
                    type="text"
                    placeholder="City"
                    value={propInfo.city}
                    onChange={handleCityChange}
                    required
                  />
                </Col>
                <Col sm={4}>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    name="state"
                    class="text_field"
                    type="text"
                    placeholder="State"
                    value={propInfo.state}
                    onChange={handleStateChange}
                    required
                  />
                </Col>
                <Col sm={4}>
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control
                    name="zipCode"
                    class="text_field"
                    type="text"
                    placeholder="ZipCode"
                    value={propInfo.zipCode}
                    onChange={handleZipCodeChange}
                    required
                  />
                </Col>
              </Row>

              <Row>
                <Col sm={4}>
                  <Form.Label>Bedrooms</Form.Label>
                  <Form.Control
                    name="bedrooms"
                    class="text_field"
                    type="number"
                    placeholder="Bedrooms"
                    value={propInfo.bedrooms}
                    onChange={handleBedroomsChange}
                    required
                  />
                </Col>
                <Col sm={4}>
                  <Form.Label>Bathrooms</Form.Label>
                  <Form.Control
                    name="bathrooms"
                    class="text_field"
                    type="number"
                    placeholder="Bathrooms"
                    value={propInfo.bathrooms}
                    onChange={handleBathroomsChange}
                    required
                  />
                </Col>
                <Col sm={4}>
                  <Form.Label>SQ FT</Form.Label>
                  <Form.Control
                    name="sqFt"
                    class="text_field"
                    type="number"
                    placeholder="SQ FT"
                    value={propInfo.sqFt}
                    onChange={handleSqFtChange}
                    required
                  />
                  ft
                </Col>
              </Row>

              <Form.Group controlId="">
                <Form.Label>Year Built</Form.Label>
                <Form.Control
                  name="yearBuilt"
                  class="text_field"
                  type="number"
                  placeholder="Year Built"
                  value={propInfo.yearBuilt}
                  onChange={handleYearBuilt}
                  required
                />
              </Form.Group>

              <a href="#purchase" class="formNextLinks">Next: Purchases</a>
            </div>
            <hr></hr>

            <div id="purchase" class="formblock">
            <br></br>
            <br></br>
              <h1 className="header">Purchase</h1>
              <Form.Group controlId="">
                <Form.Label>Purchase price</Form.Label>
                <Form.Control
                  name="purchasePrice"
                  class="text_field"
                  type="number"
                  placeholder="$ Purchase price"
                  value={propInfo.purchasePrice}
                  onChange={handlePurchasePrice}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Purchase closing costs</Form.Label>
                <Form.Control
                  name="purchaseClosingCosts"
                  class="text_field"
                  type="number"
                  placeholder="$ Purchase closing costs"
                  value={propInfo.purchaseClosingCosts}
                  onChange={handlePurchaseClosingCosts}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Rehab costs</Form.Label>
                <Form.Control
                  name="rehabCosts"
                  class="text_field"
                  type="number"
                  placeholder="$ Rehab costs"
                  value={propInfo.rehabCosts}
                  onChange={handleRehabCosts}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Market Value*</Form.Label>
                <Form.Control
                  name="marketValue"
                  class="text_field"
                  type="number"
                  placeholder="$ Market Value"
                  value={propInfo.marketValue}
                  onChange={handlePropertyGrowthValue}
                  required
                />
              </Form.Group>

              <a href="#Loan" class="formNextLinks">Next: Loan</a>
            </div>
            <hr></hr>

            <div id="Loan" class="formblock">
            <br></br>
            <br></br>
              <h1 className="header">Loan Information</h1>
              <Form.Label>Cash purchase?</Form.Label>

              <input type="checkbox"></input>

              <Form.Group controlId="">
                <Form.Label>Loan Amount</Form.Label>
                <Form.Control
                  name="loanAmount"
                  class="text_field"
                  type="number"
                  placeholder="$ Loan Amount"
                  value={propInfo.loanAmount}
                  onChange={handleLoanAmount}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Interest Rate %</Form.Label>
                <Form.Control
                  name="interestRate"
                  class="text_field"
                  type="number"
                  placeholder="InterestRate  %"
                  value={propInfo.interestRate}
                  onChange={handleInterestRate}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Loan Term</Form.Label>
                <Form.Control
                  name="loanTerms"
                  class="text_field"
                  type="number"
                  placeholder="0"
                  value={propInfo.loanTerms}
                  onChange={handleLoanTerms}
                  required
                />
                <Form.Label>Years</Form.Label>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>tax rate %</Form.Label>
                <Form.Control
                  name="taxRate"
                  class="text_field"
                  type="number"
                  placeholder="tax rate%"
                  value={propInfo.taxRate}
                  onChange={handleTaxRate}
                  required
                />
                /month
              </Form.Group>

              <a href="#RentalIncome" class="formNextLinks">Next: Rental Income</a>
            </div>
            <hr></hr>

            <div id="RentalIncome" class="formblock">
            <br></br>
            <br></br>
              <h1 className="header">Rental income</h1>

              <Form.Group controlId="">
                <Form.Label>Gross monthly income</Form.Label>
                <Form.Control
                  name="grossMonthlyIncome"
                  class="text_field"
                  type="number"
                  placeholder="$ Gross monthly income"
                  value={propInfo.grossMonthlyIncome}
                  onChange={handleGrossMonthlyIncome}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Annual income Growth %</Form.Label>
                <Form.Control
                  name="annualIncomeGrowth"
                  class="text_field"
                  type="number"
                  placeholder="Annual income Growth %"
                  value={propInfo.annualIncomeGrowth}
                  onChange={handleAnnualIncomeGrowth}
                  required
                />
              </Form.Group>

              <a href="#Expense" class="formNextLinks">Next: Expense</a>
            </div>
            <hr></hr>

            <div id="Expense" class="formblock">
            <br></br>
            <br></br>
              <h1 className="header">Expenses</h1>

              <Form.Group controlId="">
                <Form.Label>Annual Property Taxes</Form.Label>
                <Form.Control
                  name="propertyTaxes"
                  class="text_field"
                  type="number"
                  placeholder="$ Annual Property Taxes"
                  value={propInfo.propertyTaxes}
                  onChange={handlePropertyTaxes}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Annual Insurance </Form.Label>
                <Form.Control
                  name="insurance"
                  class="text_field"
                  type="number"
                  placeholder="$ Annual Insurance"
                  value={propInfo.insurance}
                  onChange={handleInsurance}
                  required
                />
              </Form.Group>

              <div>
                Maintenance, vacancy, capital expenditures, and management fees
                are expressed as percentages of gross monthly income.
              </div>

              <Form.Group controlId="">
                <Form.Label>Repairs & maintenance</Form.Label>
                <Form.Control
                  name="repairsAndMaintenence"
                  class="text_field"
                  type="number"
                  placeholder="Repairs maintenance %"
                  value={propInfo.repairsAndMaintenence}
                  onChange={handleRepairsAndMaintenence}
                  max="100"
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Vacancy</Form.Label>
                <Form.Control
                  name="vacancy"
                  class="text_field"
                  type="number"
                  placeholder="Vacancy %"
                  value={propInfo.vacancy}
                  onChange={handleVacancy}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Capital expenditures</Form.Label>
                <Form.Control
                  name="capitalExpenditures"
                  class="text_field"
                  type="number"
                  placeholder="$ Capital expenditures"
                  value={propInfo.capitalExpenditures}
                  onChange={handleCapitalExpenditures}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Management fees</Form.Label>
                <Form.Control
                  name="managementFees"
                  class="text_field"
                  type="number"
                  placeholder="Management fees %"
                  value={propInfo.managementFees}
                  onChange={handleManagementFees}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Electricity</Form.Label>
                <Form.Control
                  name="electricity"
                  class="text_field"
                  type="number"
                  placeholder="$ Electricity"
                  value={propInfo.electricity}
                  onChange={handleElectricity}
                  required
                />
                /month
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Water And sewer</Form.Label>
                <Form.Control
                  name="waterAndSewer"
                  class="text_field"
                  type="number"
                  placeholder="$ Water And sewer"
                  value={propInfo.waterAndSewer}
                  onChange={handleWaterAndSewer}
                  required
                />
                /month
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Gas</Form.Label>
                <Form.Control
                  name="gas"
                  class="text_field"
                  type="number"
                  placeholder="$ Gas"
                  value={propInfo.gas}
                  onChange={handleGas}
                  required
                />
                /month
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>HOA fees</Form.Label>
                <Form.Control
                  name="hoaFees"
                  class="text_field"
                  type="number"
                  placeholder="$ HOA fees"
                  value={propInfo.hoaFees}
                  onChange={handleHoaFees}
                  required
                />
                /month
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Garbage</Form.Label>
                <Form.Control
                  name="garbage"
                  class="text_field"
                  type="number"
                  placeholder="$ Garbage"
                  value={propInfo.garbage}
                  onChange={handleGarbage}
                  required
                />
                /month
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Other Fees</Form.Label>
                <Form.Control
                  name="otherFees"
                  class="text_field"
                  type="number"
                  placeholder="$ Other"
                  value={propInfo.otherFees}
                  onChange={handleOtherFees}
                  required
                />
                /month
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Annual Expense Growth %</Form.Label>
                <Form.Control
                  name="annualExpensesGrowth"
                  class="text_field"
                  type="number"
                  s
                  placeholder="Annual Expense Growth %"
                  value={propInfo.annualExpensesGrowth}
                  onChange={handleAnnualExpensesGrowth}
                  required
                />
              </Form.Group>
            </div>

            <button
              class="register"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <br />
            <br />
          </Form>
        </div>
      </Container>
    </>
  );
};

export default PropertyForm;
