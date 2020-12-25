import React, { Component, useState } from "react";

const Calculations = ({
  streetAddress,
  city,
  state,
  zipCode,
  bedrooms,
  bathrooms,
  sqFt,
  yearBuilt,
  purchasePrice,
  purchaseClosingCosts,
  rehabCosts, 
  marketValue,
  loanAmount,
  interestRate,
  pointsCharged,
  loanTerms,
  grossMonthlyIncome,
  annualIncomeGrowth,
  propertyTaxes,
  insurance,
  repairsAndMaintenence,
  vacancy,
  capitalExpenditures,
  managementFees,
  electricity,
  gas,
  waterAndSewer,
  hoaFees,
  garbage,
  otherFees,
  annualExpensesGrowth,
  salesExpenses
}) => {
  const NetOperatingIncome = () => {
    return gas * gas;
    //(grossMonthlyIncome*12) - 
  };

  const EstimatedMarketValue = () => {
    //NetOperatingIncome()/TotalPrice
  };

  return <></>;
};

export default Calculations;
