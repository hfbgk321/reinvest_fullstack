import "./App.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import signup from "./components/Signedout/Signup";
import login from "./components/Signedout/Login";
import HomePage from "./components/Signedout/homepage";
import signedIn from "./components/SignedIn/signedIn";
import ImageComp2 from "./components/formpages/ImageComp2";
import formpage from "./components/formpages/Formpage";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={login} />
        <Route path="/signup" component={signup} />
        <Route path="/signedIn" component={signedIn} />
        <Route path="/propertyinfo" component={formpage} />
        <Route path="/imagetester2" component={ImageComp2} />
      </Router>
    </>
  );
}

export default App;
