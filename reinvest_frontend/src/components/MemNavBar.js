import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import {Container, Row, Col, Image} from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link as Router } from 'react-router-dom';
import image from '../images/unknown.png'
import '../components/homepage.css'

 function MemNavB(){
    return (
        <>
      <div>
            <Navbar collapseOnSelect expand="lg"  bg="clear" variant="light">
            <Navbar.Brand href="#home" style={{color: "#CA2B69"}}>FLOW</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{background:"none"}} className="mr-auto" style={{bg:"none"}}>
            </Nav>
            <Nav style={{background:"none"}}>
            <Nav.Link eventKey={2} href="/" style={{color: "#CA2B69"}}>Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={{color: "#CA2B69"}}>
                      Properties
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={{color: "#CA2B69"}}>
                 Notifications
            </Nav.Link>
            <Nav.Link style={{background:"none"}} eventKey={2} href="/Signout" style={{color: "#CA2B69"}}> 
                 Sign Out
            </Nav.Link>
                    
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
        </>
    )
}

export default MemNavB;

