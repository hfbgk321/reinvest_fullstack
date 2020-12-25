import React from 'react';
import ReactDOM from 'react-dom';
// import './formpages.css';
import Form from "./Form";
import MemNavB from '../SignedIn/MemNavBar'
import FormSideBar from './FormSideBar'

function Formpage() {
    return ( 
        <body>
            <div>
                <MemNavB />
            </div>
            <div>
                <br></br>
                <br></br>
                 <Form/>
            </div>
            
           
        </body>
    )
}


export default Formpage;