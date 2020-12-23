import './App.css';
import NavB from './components/Navbar';
import {Route,Link,BrowserRouter as Router} from "react-router-dom";
import signup from './components/Signup'
import login from './components/Login'
import HomePage from './components/homepage';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component = {HomePage}/>
        <Route path="/login" component = {login}/>
        <Route path="/signup" component = {signup}/>
      </Router>
      
    </>
  );
}

export default App;
