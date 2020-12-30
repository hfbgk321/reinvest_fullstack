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
      <div class="centerSearchBar">
        <input 
        type = "text"
        class="barStyling"
        value={keyword}
        placeholder="Type in your address"
        onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <section className="booklist">
        {yourProperties.map((property,i) => {
          if (property.img == undefined){
            return (
              <>
            <div className = "property" key ={i}>
              <img
              class="center"
              // src={unknown}
              src={StockHouseImage}
              width="20%"
              margin="auto"
              alt="975 SPONGEBOB AVENUE"
            ></img>
              <h1>{property.streetAddress}</h1>
              <h2>{property.city}</h2>
              <h2>{property.state}</h2>
              <h2>{property.zipCode}</h2>
              <button style = {{width:"200px",height:"50px",backgroundColor:"black",color:"white"}} onClick ={()=>{
                localStorage.setItem('propertyInfoId',property._id);
                console.log(localStorage.getItem('propertyInfoId'));
                window.location = "http://localhost:3000/finalanalytics";
              }}>View Property</button>
              <button style = {{width:"200px",height:"50px",backgroundColor:"black",color:"white"}} onClick ={(e) => {
                e.preventDefault();
                handleEdit(property._id);
              }} >Edit Property</button>
              <button style = {{width:"200px",height:"50px",backgroundColor:"black",color:"white"}} onClick ={(e) => {
                e.preventDefault();
                handleDelete(property._id);
              }}>Delete Property</button>

            </div>
            </>
          )} else {
          const buffer = property.img.data.data;
          const b64 = new Buffer.from(buffer).toString('base64');
          const mimeType = property.img.contentType;
          return (
            <>
            <div className = "property" key ={i}>
              <img
              class="center"
              // src={unknown}
              src={`data:${mimeType};base64,${b64}`}
              width="70%"
              margin="auto"
              alt="975 SPONGEBOB AVENUE"
            ></img>
              <h1>{property.streetAddress}</h1>
              <h2>{property.city}</h2>
              <h2>{property.state}</h2>
              <h2>{property.zipCode}</h2>
              <button style = {{width:"200px",height:"50px",backgroundColor:"black",color:"white"}} onClick ={()=>{
                localStorage.setItem('propertyInfoId',property._id);
                console.log(localStorage.getItem('propertyInfoId'));
                window.location = "http://localhost:3000/finalanalytics";
              }}>View Property</button>
              <button style = {{width:"200px",height:"50px",backgroundColor:"black",color:"white"}} onClick = {(e) =>{
                e.preventDefault();
                handleEdit(property._id);
              }}>Edit Property</button>
              <button style = {{width:"200px",height:"50px",backgroundColor:"black",color:"white"}} onClick ={(e) => {
                e.preventDefault();
                handleDelete(property._id);
              }}>Delete Property</button>

            </div>
            </>
          )}})}
          <Link to="/propertyinfo">Add New Property</Link>
      </section>
    </>
  );
}

export default PropertyList;
