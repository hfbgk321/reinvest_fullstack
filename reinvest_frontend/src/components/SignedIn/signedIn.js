import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { properties } from "./properties";
import Property from "./Property";
import "./signedIn.css";
import { Link } from "react-router-dom";
import Navb from "../Signedout/Navbar"; //importing from navbar.js?
import axios from "axios";
import Cookies from 'js-cookie';
import StockHouseImage from '../../images/stockHouse.jpg';
import {
  Container,
  Row,
  Col,
  FormControl,
  Form,
  FormGroup,
  Button,
} from "react-bootstrap";


function PropertyList(props) {
  const [keyword, setKeyword] = useState("");
  const [yourProperties, setYourProperties] = useState([]);
  const [propertyId,setPropertyId] = useState();

  useEffect(()=>{
    if(Cookies.get('property_id') !== undefined){
      Cookies.remove('property_id');
    }
  },[])

  useEffect(()=>{
    if(keyword.length === 0){
      axios.post('http://localhost:4000/properties/all',{auth:Cookies.get('auth')}).then((res) =>{
          setYourProperties(res.data);
          console.log(res.data);
      }).catch((err) => console.log('err when length is 0'))
    }
    else{
      axios.post('http://localhost:4000/properties/query',{query: keyword,auth:Cookies.get('auth')}).then(res =>{
        setYourProperties(res.data);
        console.log(res.data);
      }).catch(err => console.log('err when searching'));
    }
  },[keyword]);

  const handleDelete=(property_id) =>{
    axios.delete(`http://localhost:4000/properties/${property_id}`,{data:{auth:Cookies.get('auth')}}).then(res =>{
      console.log(res);
      setYourProperties(yourProperties.filter(property => property._id !== property_id));
    }).catch(err=>{
      console.log(err);
    })
  }


  const handleEdit = (property_id) =>{
    Cookies.set('property_id',property_id);
    Cookies.set('redirect_link','/signedin');
    setTimeout(()=>{
      window.location = 'http://localhost:3000/propertyinfo'
    },1000)
    
  }


  return (
    <>
      <Navb auth ={props.auth}/>
      <Row className="centerSearchBar">
        <input 
        type = "text"
        class="barStyling"
        value={keyword}
        placeholder="Search"
        onChange={(e) => setKeyword(e.target.value)}
        />
      </Row>
      <Row className = "flex_center" sm>
        <ul class = "flex_container wrap">
          {yourProperties.map((property,i) => {
            if (property.img == undefined){
              return (
                <div class="property_card" key ={i}>
                  <div className = "property" >
                    <img
                    // src={unknown}
                    src={StockHouseImage}
                    // width="50%"
                    // margin="auto"
                    alt="975 SPONGEBOB AVENUE"
                    ></img>
                    <div class="proptext_styling">
                      <span>{property.streetAddress} <br></br></span>
                      <span >{property.city}, {property.state}  {property.zipCode}</span>
                    </div>
                    <div class="wrapper">
                        <button class="property_button" onClick ={()=>{
                          localStorage.setItem('propertyInfoId',property._id);
                          console.log(localStorage.getItem('propertyInfoId'));
                          window.location = "http://localhost:3000/finalanalytics";
                        }}>View</button>
                        <button class="property_button" onClick = {(e) =>{
                          e.preventDefault();
                          handleEdit(property._id);
                        }} >Edit</button>
                        <button class="property_button" onClick ={(e) => {
                          e.preventDefault();
                          handleDelete(property._id);
                        }}>Delete</button>
                    </div>
                  </div>
                </div>
            )} else {
            const buffer = property.img.data.data;
            const b64 = new Buffer.from(buffer).toString('base64');
            const mimeType = property.img.contentType;
            return (
              <div class="property_card" key ={i}>
                <div className = "property" >
                  <img
                  // src={unknown}
                  src={`data:${mimeType};base64,${b64}`}
                  // width="70%"
                  // margin="auto"
                  alt="975 SPONGEBOB AVENUE"
                  ></img>
                  <div class="proptext_styling">
                    <span>{property.streetAddress} <br></br></span>
                    <span >{property.city}, {property.state}  {property.zipCode}</span>
                  </div>
                  <div class="wrapper">
                    <button class="property_button" onClick ={()=>{
                      localStorage.setItem('propertyInfoId',property._id);
                      console.log(localStorage.getItem('propertyInfoId'));
                      window.location = "http://localhost:3000/finalanalytics";
                    }}>View</button>
                    <button class="property_button" onClick = {(e) =>{
                      e.preventDefault();
                      handleEdit(property._id);
                    }}>Edit</button>
                    <button class="property_button" onClick ={(e) => {
                      e.preventDefault();
                      handleDelete(property._id);
                    }}>Delete</button>
                  </div> 
                </div>
              </div>
            )}})}
            <div class="button_wrapper">
              <button class="button_styling" onClick={() => {window.location = "/propertyinfo"}}>Add New Property</button>
            </div>
        </ul>
      </Row>
    </>
  );
}

export default PropertyList;
