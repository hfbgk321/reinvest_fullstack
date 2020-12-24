import "./App.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import signup from "./components/Signedout/Signup";
import login from "./components/Signedout/Login";
import HomePage from "./components/Signedout/homepage";
import signedIn from "./components/SignedIn/signedIn";
import PropInfo from "./components/formpages/propertyinfo";
import ImageComp from "./components/formpages/ImageComp";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={login} />
        <Route path="/signup" component={signup} />
        <Route path="/signedIn" component={signedIn} />
        <Route path="/propertyinfo" component={PropInfo} />
        <Route path="/imagetester" component={ImageComp}/>
      </Router>
    </>
  );
}

export default App;
