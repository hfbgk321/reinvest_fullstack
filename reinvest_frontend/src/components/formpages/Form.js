import React, { Component, useState } from "react";
// import { useWindowScroll} from "react-use";
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

const PropertyForm = () => {
  const [propInfo, setPropInfo] = useState({
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
    pointsCharged: 0,
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
    salesExpenses: 0
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
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleBathroomsChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleSqFtChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleYearBuilt = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handlePurchasePrice = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handlePurchaseClosingCosts = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleRehabCosts = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handlePropertyGrowthValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleLoanAmount = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  
  const handleInterestRate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handlePointsCharged = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleLoanTerms = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleGrossMonthlyIncome = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleAnnualIncomeGrowth = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handlePropertyTaxes = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleInsurance = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleRepairsAndMaintenence = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleVacancy = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleCapitalExpenditures = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleManagementFees = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleElectricity = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleGas = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleWaterAndSewer = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleHoaFees = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleGarbage = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleOtherFees = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleAnnualExpensesGrowth = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };
  const handleSalesExpenses = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPropInfo({ ...propInfo, [name]: value });
  };

  const handleSubmit = (e) => {
      console.log(propInfo)
  } 

  return (
    <>
      <Container>
        <div className="center1">
          <Form >

            <div id="Property Information" class="formblock">
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
                  required
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

              <a href="#purchase">Next: Purchases</a>

            </div>
            <br></br>
            <hr></hr>
            <br></br>

            <div id="purchase" class="formblock">
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

              <a href="#Loan">Next: Loan</a>
            </div>
            <br></br>
            <hr></hr>
            <br></br>

            <div id="Loan" class="formblock">
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
                <Form.Label>Points Charged</Form.Label>
                <Form.Control
                  name="pointsCharged"
                  class="text_field"
                  type="number"
                  placeholder="0"
                  value={propInfo.pointsCharged}
                  onChange={handlePointsCharged}
                  required
                />
              </Form.Group>
              
              <Form.Group controlId="">
                <Form.Label>Loan Term</Form.Label>
                <Form.Control
                  name="loanTerm"
                  class="text_field"
                  type="number"
                  placeholder="0"
                  value={propInfo.loanTerm}
                  onChange={handleLoanTerms}
                  required
                />
                <Form.Label>Years</Form.Label>
              </Form.Group>
              
              <a href="#RentalIncome">Next: Rental Income</a>
            </div>
            <br></br>
            <hr></hr>
            <br></br>

            <div id="RentalIncome" class="formblock">
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

              <a href="#Expense">Next: Expense</a>
            </div>
            <br></br>
            <hr></hr>
            <br></br>

            <div id="Expense" class="formblock">
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

              <div>Maintenance, vacancy, capital expenditures, and management fees are expressed as percentages of gross monthly income.</div>

              <Form.Group controlId="">
                <Form.Label>Repairs & maintenance</Form.Label>
                <Form.Control
                  name="repairsAndMaintenence"
                  class="text_field"
                  type="number"
                  placeholder="Repairs maintenance %"
                  value={propInfo.repairsAndMaintenence}
                  onChange={handleRepairsAndMaintenence}
                  max = "100"
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
                <Form.Label>Sales expenses %</Form.Label>
                <Form.Control
                  name="salesExpenses"
                  class="text_field"
                  type="number"
                  placeholder="Sales expenses %"
                  value={propInfo.salesExpenses}
                  onChange={handleSalesExpenses}
                  required
                />
              </Form.Group>
              
              <Form.Group controlId="">
                <Form.Label>Annual Expense Growth %</Form.Label>
                <Form.Control
                  name="annualExpensesGrowth"
                  class="text_field"
                  type="number"s
                  placeholder="Annual Expense Growth %"
                  value={propInfo.annualExpensesGrowth}
                  onChange={handleAnnualExpensesGrowth}
                  required
                />
              </Form.Group>
              
            </div>

            <button class="register"
              variant="primary"
              type="submit"
              onClick={handleSubmit}>Submit
            </button>
            <br/>
            <br/>


            
          </Form>
        </div>
      </Container>
    </>
  );
};

export default PropertyForm;
