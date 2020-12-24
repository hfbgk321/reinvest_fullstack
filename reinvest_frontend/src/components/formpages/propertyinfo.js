import React from "react";
import ReactDOM from "react-dom";
import "./formpages.css";
import { Route, Link, BrowserRouter, Redirect } from "react-router-dom";

function PIPage() {
  return (
    <body>
      <article>
        <section class="formSection">
         
        </section>
        <section>
          <FormNav />
          <HelpBox />
          <NextButton />
        </section>
      </article>
      <article>
      </article>
      <Backbutton />
    </body>
  );
}


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
  return (
    <div>
      <button class="formNavButton">1</button>
      <button class="formNavButton">2</button>
      <button class="formNavButton">3</button>
      <button class="formNavButton">4</button>
      <button class="formNavButton">5</button>
    </div>
  );
};

const Backbutton = () => {
  return (
    <div>
      <Link to="/signedIn" className="buttonStart">
        {" "}
        Back{" "}
      </Link>
    </div>
  );
};
export default PIPage;
//   ReactDOM.render(
//     // <React.StrictMode>
//     //   <App />
//     // </React.StrictMode>
//     <PIPage />,
//     document.getElementById('root')
//   );
