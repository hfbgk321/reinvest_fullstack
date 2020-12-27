import React from "react";
import ReactDOM from "react-dom";
import { properties } from "./properties";
import Property from "./Property";
import "./signedIn.css";
import { Link } from "react-router-dom";
import Navb from "../Signedout/Navbar"; //importing from navbar.js?

function PropertyList() {
  return (
    <>
      <Navb />
      <section className="booklist">
        {properties.map((property) => {
          return <Property key={property.id} {...property}></Property>;
        })}
        <Link to="/propertyinfo">Add New Property</Link>
      </section>
    </>
  );
}

export default PropertyList;
