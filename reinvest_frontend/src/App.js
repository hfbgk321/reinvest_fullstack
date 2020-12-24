import "./App.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import signup from "./components/Signedout/Signup";
import login from "./components/Signedout/Login";
import HomePage from "./components/Signedout/homepage";
import signedIn from "./components/SignedIn/signedIn";
import PropInfo from "./components/formpages/propertyinfo";
import ImageComp from "./components/formpages/ImageComp";
import ImageComp2 from "./components/formpages/ImageComp2";
import formpage from "./components/formpages/Formpage";
import imagepage from "./components/formpages/imageForm";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={login} />
        <Route path="/signup" component={signup} />
        <Route path="/signedIn" component={signedIn} />
        <Route path="/propertyinfo" component={formpage} />
        <Route path="/imagetester" component={ImageComp} />
        <Route path="/imagetester2" component={ImageComp2} />
        <Route path="/imageForm" component={imagepage} />
      </Router>
    </>
  );
}

export default App;
