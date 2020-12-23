import React from "react";
import ReactDOM from "react-dom";
import "./formpages.css";


function PIPage() {
  return (
    <body>
      <article>
        <section class="formSection">
          <PropertyInformation />
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

const PropertyInformation = () => {
  return (
    <div class="formBoxbox">
      <div class="formBox">
        <h1 class="formTitle">Property Information</h1>
        <form>
          <div class="formInputNames">Street address</div>
          <input type="text" class="piinput"></input>
          <br></br>
          <article>
            <section>
              <div class="formInputNames">City</div>
              <input type="text" class="piinput"></input>
            </section>
            <section>
              <div class="formInputNames">State </div>
              <input type="text" class="piinput"></input>
            </section>
            <section>
              <div class="formInputNames">Zip Code</div>
              <input type="text" class="piinput"></input> <br></br>
            </section>
          </article>
          <article>
            <section>
              <div class="formInputNames">Bedrooms</div>
              <input type="text" class="piinput"></input>
            </section>
            <section>
              <div class="formInputNames">Bathrooms </div>
              <input type="text" class="piinput"></input>
            </section>
            <section>
              <div class="formInputNames">Sq. Ft.</div>
              <input type="text" class="piinput"></input> <br></br>
            </section>
          </article>
          <div class="formInputNames">Year Build</div>
          <input type="text" class="piinput"></input> <br></br>
          <div class="formInputNames">Description</div>
          <textarea></textarea>
          <div class="space"></div>
        </form>
      </div>
    </div>
  );
};

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

const HelpBox = () => {
  return (
    <div class="helpBox">
      <h4>Property Information</h4>
      <br></br>
      Enter your property information on the left
    </div>
  );
};

const NextButton = () => {
  return (
    <div>
      <button class="nextButton">Next</button>
    </div>
  );
};
const FormNav = () => {
  return(
    <div>
      <button class="formNavButton">1</button>
      <button class="formNavButton">2</button>
      <button class="formNavButton">3</button>
      <button class="formNavButton">4</button>
      <button class="formNavButton">5</button>
    </div>
  )
};

export default PIPage;
//   ReactDOM.render(
//     // <React.StrictMode>
//     //   <App />
//     // </React.StrictMode>
//     <PIPage />,
//     document.getElementById('root')
//   );
