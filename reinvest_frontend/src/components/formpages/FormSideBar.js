import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './formpages.css';
import StickyBox from "react-sticky-box"

import {
    Container,
    Row,
    Col,
    FormControl,
    Form,
    FormGroup,
    Button,
  } from "react-bootstrap";


const FormImage = () => {
    const [image,setImage] = useState({});
    const [file,setFile] = useState(null);
  
    const handleClick = (e) => {
      document.getElementById("selectImage").click();
    }
  
    const fileOnChange = (event) =>{
      setImage(event.target.files[0]);
      setFile(URL.createObjectURL(event.target.files[0]))
    }
  
    /*const sendImage = async (event) =>{
      let formData = new FormData();
      formData.append("image",image);
  
      let response = await fetch('http://localhost:4000/img_fetch',{
        method:"post",
        body: formData
      })
  
        let data = await response.json();
        console.log(data);
      
    }*/
  
  
    return (
      <div>
        <img src ={file} width="80%" height="80%"/>
        <br/>
        <button onClick={handleClick} className="buttonForUploadImage">Upload Image</button>
        <input id='selectImage' type="file" onChange = {fileOnChange} accept = "image/png,image/jpg,image/jpeg" style={{display:'none'}}/>
        {/*<button onClick ={sendImage}>Upload</button>*/}
      </div>
    );
}



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
            <button onClick={handleClickPropertyInformation} className="formNavButton">Property Information</button>
            <a id='propInfoButton' href="#Property Information" style={{display:'none'}}>Property Information</a> <br/>
            <button onClick={handleClickPurchases} className="formNavButton">Purchases</button>
            <a id='purchasesButton' href="#purchase" style={{display:'none'}}>Purchases</a> <br/>
            <button onClick={handleClickLoan} className="formNavButton">Loan</button>
            <a id='loanButton' href="#Loan" style={{display:'none'}}>Loan</a> <br/>
            <button onClick={handleClickRentalIncome} className="formNavButton">Rental Income</button>
            <a id='rentalIncomeButton' href="#RentalIncome" style={{display:'none'}}>Rental Income</a> <br/>
            <button onClick={handleClickExpenses} className="formNavButton">Expense</button>
            <a id='expensesButton' href="#Expense" style={{display:'none'}}>Expense</a> <br/>
        </div>
    )
}

function FormSideBar() {
    return ( 
        <>
        
            <StickyBox offsetTop={100} offsetBottom={20} style={{border: "3px solid green"}}>
            <div class = "form-sidebar-nav">
            
                <FormImage/>
                <FormNav/>
            
            </div>
            </StickyBox>
            
        </>
    )
}

export default FormSideBar;