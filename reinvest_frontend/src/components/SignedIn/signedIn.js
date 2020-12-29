import React from "react";
import ReactDOM from "react-dom";
import { properties } from "./properties";
import Property from "./Property";
import "./signedIn.css";
import { Link } from "react-router-dom";
import Navb from "../Signedout/Navbar"; //importing from navbar.js?
import SearchBar from "./SearchBar"

function PropertyList(props) {
  return (
    <>
      <Navb auth ={props.auth}/>
      <section className="booklist">
        {properties.map((property) => {
          return <Property key={property.id} {...property}></Property>;
        })}
        <SearchBar></SearchBar>
        <Link to="/propertyinfo">Add New Property</Link>
      </section>
    </>
  );
}

export default PropertyList;
