import React, { Component, useState } from "react";
//insurance and property tax

const Calculations =  ({
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
  taxRate
  }) => {
    const MonthlyIncome = () => {
      return grossMonthlyIncome;
    };
    const MonthlyFixedMorgage = () => {
      let n = loanTerms * 12; //periods
      let P = loanAmount; //principle
      let r = 12 * interestRate; //monthlyInterest

      return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    };
    const MonthlyCashFlow = () => {
      return NetOperatingIncome() / 12 - MonthlyFixedMorgage();
    };
    const NetOperatingIncome = () => {
      return (
        (grossMonthlyIncome -
          insurance / 12 -
          otherFees -
          hoaFees -
          propertyTaxes / 12 -
          managementFees -
          repairsAndMaintenence -
          capitalExpenditures -
          electricity -
          gas -
          garbage -
          waterAndSewer) *
        12 *
        (1 - vacancy / 100)
      );
    };

    const CapitalizationRate = () => {
      return NetOperatingIncome() / (purchasePrice + rehabCosts);
    };

    const CashOnCash = () => {
      return (MonthlyCashFlow() * 12) / (purchasePrice - loanAmount + rehabCosts + purchaseClosingCosts);
    };

    const RentToCost = () => {
      return MonthlyCashFlow() / purchasePrice;
    };
    const EstimatedMarketValue = () => {
      return NetOperatingIncome() / CapitalizationRate();
    };
    const totalDebtService = () => {
      return interestRate * (1 - taxRate) + loanAmount;
    };

    const debtToCoverage = () => {
      return NetOperatingIncome() / totalDebtService();
    };

    const onePercentRule = () => {
      return (grossMonthlyIncome)/ (purchasePrice + rehabCosts);
    };

    const priceToRent = () => {
      return purchasePrice / (grossMonthlyIncome * 12);
    };
    const grossRentMultiplier = () => {
      return marketValue / (grossMonthlyIncome * 12);
    };

    const NetIncomeAfterFinancing = () => {
        return NetOperatingIncome() - MonthlyFixedMorgage();
    }
    
    const ROI = () => {
        let totalInitalInvestment = purchasePrice + rehabCosts;
        let newProfits = MonthlyCashFlow() * 12 * Math.abs(annualIncomeGrowth-annualExpensesGrowth)/100; 
        return newProfits/totalInitalInvestment;
    } 
    
    const initialJson = {
      monthlyIncome: MonthlyIncome(),
      monthlyFixedMorgage: MonthlyFixedMorgage(),
      monthlyCashFlow: MonthlyCashFlow(),
      netOperatingIncome: NetOperatingIncome(),
      cashOnCash: CashOnCash(),
      rentToCost: RentToCost(),
      estimatedMarketValue: EstimatedMarketValue(),
      totalDebtService: totalDebtService(),
      debtTocoverage: debtToCoverage(),
      onePercentRule: onePercentRule(),
      priceToRent: priceToRent(),
      grossRentMultiplier: grossRentMultiplier(),
      netIncomeAfterFinancing: NetIncomeAfterFinancing(),
      roi: ROI(),
    };

  }
;

export default Calculations;
