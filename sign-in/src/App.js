import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
function App() {
  return (
    <main>
      <Router>
        <div className="App">
          <h1>Log In/Sign Up</h1>
        </div>
        <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">LogIn</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route path="/signup">
          <SignUp/>
          </Route>
        </Switch>
        </div>
      </Router>
    </main>
  );
}

export default App;
