import React, {useState} from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import axios from 'axios';
import Cookies from 'js-cookie';

 function NavB(props){
     const [showPropertiesAndSignOut,setShowPropertiesAndSignOut] = useState(props.auth === true? 'block': 'none');
     const [showLogin,setShowLogin] = useState(props.auth === true? 'none': 'block');
     
     const handleClick = (e) => {
        axios
          .post("http://localhost:4000/api/user/signout",{auth: Cookies.get('auth')},{withCredentials:true})
          .then((res) => {
            console.log(res);
            console.log(res.data);
            if (res.status === 200) window.location = "http://localhost:3000/";
            else console.log("Sign Out Failed");
          })
          .catch((err) => {
            console.log(err + " not signed out ");
          });
      }

    return (
        <>
      <div>
            <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark">
            <Navbar.Brand href="/" style={{color: "#fff",fontWeight:"bold"}}>REInvest</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" style={{backgroundColor: "#343a40"}}>
            <Nav  className="mr-auto" style={{bg:"none"}}>
            </Nav>
            <Nav style={{background:"none"}}>
            <Nav.Link eventKey={2} href="/" style={{color: "#fff",fontWeight:"bold"}}>Home</Nav.Link>
            <Nav.Link eventKey={2} href="/login" style={{color: "#fff",fontWeight:"bold",display: showPropertiesAndSignOut}}>
                      Properties
            </Nav.Link> 
        
            <Nav.Link style={{background:"none"}} eventKey={2} href="/login" style={{color: "#fff",fontWeight:"bold",display:showLogin}}>
                 Login In
            </Nav.Link>

            <Nav.Link  onClick={handleClick}  eventKey={2}  style={{color: "#fff",fontWeight:"bold",display: showPropertiesAndSignOut}}>
                 Sign Out
            </Nav.Link>
                    
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
        </>
    )
}

export default NavB;

