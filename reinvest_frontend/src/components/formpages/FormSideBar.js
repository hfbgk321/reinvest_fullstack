import React from 'react';
import './formpages.css';
import StickyBox from "react-sticky-box"

const FormNav = () => {
    const handleClickPropertyInformation = (e) => {
        document.getElementById("propInfoButton").click();
    }
    const handleClickPurchases = (e) => {
        document.getElementById("purchasesButton").click();
    }
    const handleClickLoan = (e) => {
        document.getElementById("loanButton").click();
    }
    const handleClickRentalIncome = (e) => {
        document.getElementById("rentalIncomeButton").click();
    }
    const handleClickExpenses = (e) => {
        document.getElementById("expensesButton").click();
    }

    return(
        <div class="form-sidebar-navigation">
            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={handleClickPropertyInformation} class="button_styling">Property Information</button>
            <a id='propInfoButton' href="#Property Information" style={{display:'none'}}>Property Information</a> <br/>
            <button onClick={handleClickPurchases} class="button_styling">Purchases</button>
            <a id='purchasesButton' href="#purchase" style={{display:'none'}}>Purchases</a> <br/>
            <button onClick={handleClickLoan} class="button_styling">Loan</button>
            <a id='loanButton' href="#Loan" style={{display:'none'}}>Loan</a> <br/>
            <button onClick={handleClickRentalIncome} class="button_styling">Rental Income</button>
            <a id='rentalIncomeButton' href="#RentalIncome" style={{display:'none'}}>Rental Income</a> <br/>
            <button onClick={handleClickExpenses} class="button_styling">Expense</button>
            <a id='expensesButton' href="#Expense" style={{display:'none'}}>Expense</a> <br/>
        </div>
    )
}

function FormSideBar() {
    return ( 
        <>
        
            <StickyBox offsetTop={100} offsetBottom={20}>
            <div class = "form-sidebar-nav">
            
                <FormNav/>
            
            </div>
            </StickyBox>
            
        </>
    )
}

export default FormSideBar;