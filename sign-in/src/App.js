import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import AuctionList from "./components/AuctionList";
import SearchForm from "./components/SearchForm";
import StartAuction from "./components/StartAuction";
import Item from "./components/Item";
function App() {
  const [searchQuery,setSearchQuery] = useState("");
  const grabQueryToSearch = query => {
    setSearchQuery(query);
  };
  return (
    <main>
      <Router>
        <div className="App">
          <h1>Silent Auction</h1>
        </div>
        <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/auctions">View Auctions</Link>
            </li>
            <li>
              <Link to="/start">Start an Auction</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route path="/signup">
          <SignUp/>
          </Route>
          <Route path="/auctions">
            <SearchForm grabQueryToSearch={grabQueryToSearch} />
          <AuctionList query={searchQuery} setQuery={setSearchQuery} />
          </Route>
          <Route path="/start">
          <StartAuction/>
          </Route>
          <Route path="/items/:id">
          <Item/>
          </Route>
        </Switch>
        </div>
      </Router>
    </main>
  );
}

export default App;
