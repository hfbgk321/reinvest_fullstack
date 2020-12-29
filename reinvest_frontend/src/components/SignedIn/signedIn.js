import React, {useState} from "react";
import ReactDOM from "react-dom";
import { properties } from "./properties";
import Property from "./Property";
import "./signedIn.css";
import { Link } from "react-router-dom";
import Navb from "../Signedout/Navbar"; //importing from navbar.js?
import SearchBar from "./SearchBar"

function PropertyList(props) {
  const [keyword, setKeyword] = useState();

  const handleKeyword = () => {

  }
  return (
    <>
      <Navb auth ={props.auth}/>
      <div class="centerSearchBar">
        <input 
        class="barStyling"
        key="random1"
        value={keyword}
        placeholder={"search property"}
        onChange={handleKeyword}
        />
      </div>
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
