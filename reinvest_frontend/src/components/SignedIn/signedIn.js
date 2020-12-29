import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { properties } from "./properties";
import Property from "./Property";
import "./signedIn.css";
import { Link } from "react-router-dom";
import Navb from "../Signedout/Navbar"; //importing from navbar.js?
import axios from "axios";
import Cookies from 'js-cookie';

function PropertyList(props) {
  const [keyword, setKeyword] = useState("");
  const [yourProperties, setYourProperties] = useState([]);

  useEffect(()=>{
    if(keyword.length === 0){
      axios.post('http://localhost:4000/properties',{auth:Cookies.get('auth')}).then((res) =>{
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
  },[keyword])


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
          return (
            <div className = "property" key ={i}>
              <h1>{property.streetAddress}</h1>
              <h2>{property.city}</h2>
              <h2>{property.state}</h2>
              <h2>{property.zipCode}</h2>
            </div>
          )
        })}
        <Link to="/propertyinfo">Add New Property</Link>
      </section>
    </>
  );
}

export default PropertyList;
