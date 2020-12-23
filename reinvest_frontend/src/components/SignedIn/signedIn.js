import React from "react";
import ReactDOM from "react-dom";
import { properties } from "./properties";
import Property from "./Property";
import "./signedIn.css";
import { Link } from "react-router-dom";
import MemNavB from "./MemNavBar.js";

function PropertyList() {
  return (
    <>
      <MemNavB />
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
