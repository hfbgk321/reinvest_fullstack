import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './formpages.css';


const FormImage = () => {
  const [image,setImage] = useState({});
  const [file,setFile] = useState(null);

  const fileOnChange = (event) =>{
    setImage(event.target.files[0]);
    setFile(URL.createObjectURL(event.target.files[0]))
  }

  const sendImage = async (event) =>{
    let formData = new FormData();
    formData.append("image",image);

    let response = await fetch('http://localhost:4000/img_fetch',{
      method:"post",
      body: formData
    })

      let data = await response.json();
      console.log(data);
    
  }
    return(
        <div class = "form-sidebar-image">
            <input type="file" onChange = {fileOnChange} accept = "image/png,image/jpg,image/jpeg"/>
            <button onClick ={sendImage}>Upload</button>
            <img src ={file}/>
        </div>
    )
}



const FormNav = () => {
    return(
        <div class="form-sidebar-navigation">
            <a href="#Property Information">Property Information</a>
            <a href="#purchase">Purchases</a>
            <a href="#Loan">Loan</a>
            <a href="#RentalIncome">RentalIncome</a>
            <a href="#Expense">Expense</a>
        </div>
    )
}

const FormSideBarButton = () => {
    return(
        <div class = "form-sidebar-button">

        </div>
    )
}

function FormSideBar() {
    return ( 
        <div class="form-sidebar">
            
            <div class = "form-sidebar-nav">
                {/*<FormImage/>*/}
                <FormNav/>
                <FormSideBarButton/>
            </div>
            
        </div>
    )
}

export default FormSideBar;