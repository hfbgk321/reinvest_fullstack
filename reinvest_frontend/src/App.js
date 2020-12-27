import "./App.css";
import { Route, Link, BrowserRouter as Router, Redirect } from "react-router-dom";
import axios from 'axios';
import Cookie from 'js-cookie';
import signup from "./components/Signedout/Signup";
import login from "./components/Signedout/Login";
import HomePage from "./components/Signedout/homepage";
import signedIn from "./components/SignedIn/signedIn";
import formpage from "./components/formpages/Formpage";
import FinalAnalytics from "./components/formpages/FinalAnalytics"
import Form from './components/formpages/Form'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}

function App() {
  const [cookie, setCookie] = useState();
  const handleAuthVerification = () => {
    //setTimeout(function(){
    let cookieTester = Cookie.get('auth');
    
    /*if (cookieTester == undefined) return false;
    else {
      axios
      .post("http://localhost:4000/api/user/checkLoggedIn",{auth: cookieTester},{withCredentials:true})
      .then((res) => {
        if (res.status == 200) return true;
        else return false;
      })
      .catch((err) => {
        return false;
      });
    }
  }, 2000)*/
  }
  return (
    <>
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={login} />
        <Route path="/signup" component={signup} />
        {/*<PrivateRoute authed={handleAuthVerification} path="/signedIn" component={signedIn} />*/}

        <Route path="/signedIn" component={signedIn} />
        <PrivateRoute authed={handleAuthVerification} path="/propertyinfo" component={formpage} />
        {/*<Route path="/propertyinfo" component={formpage} />*/}
        <Route path="/finalanalytics" component={FinalAnalytics} />
        <Route path="/Form" component={Form} />
      </Router>
    </>
  );
}

export default App;
