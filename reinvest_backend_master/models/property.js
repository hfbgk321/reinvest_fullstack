const mongoose = require('mongoose');
export const propertySchema = new mongoose.Schema({
  streetAddress:{
    type: String,
    required: true
  },
  city:{
    type:String,
    required: true
  },
  state:{
    type: String,
    required: true,
  },
  zipCode:{
    type: Number,
    required:true
  },
  ownerID:{
    type: String,
    required:true
  },
  img:{
    data: Buffer,
    contentType: String,
  },
  bedrooms:{
    type: Number,
    required:true
  },
  bathrooms:{
    type: Number,
    required:true
  },
  sqFt:{
    type: Number,
    required:true
  },
  yearBuilt:{
    type:Number,
    required: true
  },
  purchasePrice:{
    type:Number,
    required: true
  },
  purchaseClosingCosts:{
    type:Number,
    required: true
  },
  rehabCosts:{
    type:Number,
    required: true
  },
  marketValue:{
    type:Number,
    required: true
  },
  loanAmount:{
    type:Number,
    required: true
  },
  interestRate:{
    type:Number,
    required: true
  },
  pointsCharged:{
    type:Number,
    default: 0,
  },
  grossMonthlyIncome:{
    type:Number,
    required: true
  },
  annualIncomeGrowth:{
    type:Number,
    required: true
  },
  propertyTaxes:{
    type:Number,
    required: true
  },
  insurance:{
    type:Number,
    required: true
  },
  repairsAndMaintenence:{
    type:Number,
    required: true
  },
  vacancy:{
    type:Number,
    required: true
  },
  capitalExpenditures:{
    type:Number,
    required: true
  },
  managementFees:{
    type:Number,
    required: true
  },
  electricity:{
    type:Number,
    required: true
  },
  gas:{
    type:Number,
    required: true
  },
  waterAndSewer:{
    type:Number,
    required: true
  },
  hoaFees:{
    type:Number,
    required: true
  },
  garbage:{
    type:Number,
    required: true
  },
  otherFees:{
    type:Number,
    required: true
  },
  annualExpensesGrowth:{
    type:Number,
    required: true
  },
  taxRate:{
    type: Number,
    required: true
  },
  monthlyIncome:{
    type: Number,
    required: true
  },
  monthlyFixedMorgage:{
    type: Number,
    required: true
  },
  monthlyCashFlow:{
    type: Number,
    required: true
  },
  netOperatingIncome:{
    type: Number,
    required: true
  },
  cashOnCash:{
    type: Number,
    required: true
  },
  rentToCost:{
    type: Number,
    required: true
  },
  estimatedMarketValue:{
    type: Number,
    required: true
  },
  totalDebtService:{
    type: Number,
    required: true
  },
  debtToCoverage:{
    type: Number,
    required: true
  },
  onePercentRule:{
    type: Boolean,
    required: true
  },
  priceToRent:{
    type: Number,
    required: true
  },
  grossRentMultiplier:{
    type: Number,
    required: true
  },
  netIncomeAfterFinancing:{
    type: Number,
    required: true
  },
  roi:{
    type: Number,
    required: true
  },
  totalExpenses:{
    type: Number,
    required: true
  },
  capitalizationRate:{
    type: Number,
    required: true
  }
})
