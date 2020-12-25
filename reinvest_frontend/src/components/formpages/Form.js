import React, { Component } from "react";
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
  return (
    <>
      <Container>
        <div className="center">
          <Form class="centeredform">
            <div id="#Proprety Information">
              <h1 className="header">Property Information</h1>

              <br></br>
              <Form.Group controlId="">
                <Form.Label>
                  Street address <b className="req">*</b>
                </Form.Label>
                <Form.Control
                  name="Street address"
                  class="text_field"
                  type="text"
                  placeholder="Street address"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  required
                />
              </Form.Group>

              <Row>
                <Col sm={4}>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    name="City"
                    class="text_field"
                    type="text"
                    placeholder="City"
                    // value={property.Streetaddress}
                    // onChange={handleStreetaddressChange}
                    required
                  />
                </Col>
                <Col sm={4}>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    name="State"
                    class="text_field"
                    type="text"
                    placeholder="State"
                    // value={property.Streetaddress}
                    // onChange={handleStreetaddressChange}
                    required
                  />
                </Col>
                <Col sm={4}>
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control
                    name="ZipCode"
                    class="text_field"
                    type="text"
                    placeholder="ZipCode"
                    // value={property.Streetaddress}
                    // onChange={handleStreetaddressChange}
                    required
                  />
                </Col>
              </Row>
            </div>
            <br></br>
            <hr></hr>
            <br></br>

            <div id="#purchase">
              <h1>Purchase</h1>
              <Form.Group controlId="">
                <Form.Label>Purchase price</Form.Label>
                <Form.Control
                  name="Purchaseprice"
                  class="text_field"
                  type="number"
                  placeholder="$ Purchase price"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Purchase closing costs *</Form.Label>
                <Form.Control
                  name="Purchaseclosingcosts"
                  class="text_field"
                  type="number"
                  placeholder="$ Purchase closing costs"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Market Value*</Form.Label>
                <Form.Control
                  name="MarketValue"
                  class="text_field"
                  type="number"
                  placeholder="$ Market Value"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  required
                />
              </Form.Group>

              <a href="#Loan">next</a>
            </div>

            <div id="Loan">
              <h1>Loan Information</h1>
              <Form.Label>Cash purchase?</Form.Label>{" "}
              <input type="checkbox"></input>
              <Form.Group controlId="">
                <Form.Label>Loan Amount</Form.Label>
                <Form.Control
                  name="LoanAmount"
                  class="text_field"
                  type="number"
                  placeholder="$ Loan Amount"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Interest Rate % *</Form.Label>
                <Form.Control
                  name="InterestRate"
                  class="text_field"
                  type="number"
                  placeholder="InterestRate  %"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Points Charged</Form.Label>
                <Form.Control
                  name="PointsCharged"
                  class="text_field"
                  type="number"
                  placeholder="0"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Loan Term</Form.Label>
                <Form.Control
                  name="LoanTerm"
                  class="text_field"
                  type="number"
                  placeholder="0"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  required
                />
                <Form.Label>Years</Form.Label>
              </Form.Group>
            </div>

            <div id="">
              <h1>Rental income</h1>

              <Form.Group controlId="">
                <Form.Label>Gross monthly income</Form.Label>
                <Form.Control
                  name="Grossmonthlyincome"
                  class="text_field"
                  type="number"
                  placeholder="$ Gross monthly income"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  required
                />
              </Form.Group>
            </div>

            <div id="">
              <h1>Expenses</h1>

              <Form.Group controlId="">
                <Form.Label>Annual Property Taxes</Form.Label>
                <Form.Control
                  name="PropertyTaxes"
                  class="text_field"
                  type="number"
                  placeholder="$ Annual Property Taxes"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Annual Insurance </Form.Label>
                <Form.Control
                  name="AnnualInsurance"
                  class="text_field"
                  type="number"
                  placeholder="$ Annual Insurance"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  required
                />
              </Form.Group>

              <div>Maintenance, vacancy, capital expenditures, and management fees are expressed as percentages of gross monthly income.</div>

              <Form.Group controlId="">
                <Form.Label>Repairs & maintenance</Form.Label>
                <Form.Control
                  name="Repairsmaintenance"
                  class="text_field"
                  type="number"
                  placeholder="Repairs maintenance %"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  max = "100"
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Vacancy</Form.Label>
                <Form.Control
                  name="Vacancy"
                  class="text_field"
                  type="number"
                  placeholder="Vacancy %"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Capital expenditures</Form.Label>
                <Form.Control
                  name="Capital expenditures"
                  class="text_field"
                  type="number"
                  placeholder="$ Capital expenditures"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Management fees</Form.Label>
                <Form.Control
                  name="Management fees"
                  class="text_field"
                  type="number"
                  placeholder="$ Management fees"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Gross monthly income</Form.Label>
                <Form.Control
                  name="Grossmonthlyincome"
                  class="text_field"
                  type="number"
                  placeholder="$ Gross monthly income"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Gross monthly income</Form.Label>
                <Form.Control
                  name="Grossmonthlyincome"
                  class="text_field"
                  type="number"
                  placeholder="$ Gross monthly income"
                  // value={property.Streetaddress}
                  // onChange={handleStreetaddressChange}
                  required
                />
              </Form.Group>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default PropertyForm;
