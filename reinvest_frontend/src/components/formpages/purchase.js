import React from 'react';
import ReactDOM from 'react-dom';
import './formpages.css';

function PurchasePage(){
    return(
      <body>
        <article>
          <section class="formSection">
            <PurchaseInformation />
          </section>
          <section>
            <FormNav />
            <HelpBox />
            <NextButton />
          </section>
        </article>
      </body>
    );
  }
  
  const PurchaseInformation = () => {
    return (
      <div class="formBoxbox">
        <div class="formBox">
          <h1 class="formTitle">Purchase</h1>
          <form>
            <div class="formInputNames">Purchase price</div>
            $<input type="number" class="normalTextbox"></input>
            <div class="formInputNames">Purchase closing costs</div>
            $<input type="number" class="normalTextbox"></input>
            <br></br>
            <input type="checkbox" class="normalInput"></input> This is a rehab<br></br>
            <div class="formInputNames">After repair value (ARV)</div>
            $<input type="number" class="normalTextbox"></input>
            <br></br>
            <div class="formInputNames">Repair costs</div>
            $<input type="number" class="normalTextbox"></input>
          </form>
        </div>
      </div>
    )
  };