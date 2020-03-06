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
import UserPage from "./components/UserPage";
import NavBar from "./components/NavBar";
import Particles from 'react-particles-js';
function App() {
  const [searchQuery,setSearchQuery] = useState("");
  const grabQueryToSearch = query => {
    setSearchQuery(query);
  };
  const particleOpt = {
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 1500
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.02
        },
        "move": {
            "direction": "right",
            "speed": 0.05
        },
        "size": {
            "value": 1
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
            }
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 1
            }
        }
    },
    "retina_detect": true
} 
  return (
    <main>
      <Router>
        <div className="App">
        </div>
        <div>
        <Switch>
          <Route exact path="/">
            <LogIn/>    
            <p>Don't have an account?</p><Link to="/signup">Sign Up!</Link>
            </Route>
          <Route path="/signup">
          <Link to="/">Log In</Link> 
          <SignUp/>
          </Route>
          <Route path="/user/auctions">
          <NavBar/>
          <div id="particles">
          <Particles params={particleOpt}/>
          </div>
          <SearchForm grabQueryToSearch={grabQueryToSearch} />
          <AuctionList query={searchQuery} setQuery={setSearchQuery} />
          </Route>
          <Route path="/user/start">
          <NavBar/>
          <StartAuction/>
          </Route>
          <Route path="/user/items/:id">
          <div id="particles">
          <Particles params={particleOpt}/>
          </div>
          <NavBar/>
          <Item/>
          </Route>
          <Route path="/user/profile">
          <div id="particles">
          <Particles params={particleOpt}/>
          </div>
          <NavBar/>
          <UserPage />
          </Route>
        </Switch>
        </div>
      </Router>
    </main>
  );
}

export default App;