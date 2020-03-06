import React from 'react';
// import styled from "styled-components";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { BrowserRouter as Link } from "react-router-dom";

const NavBar = (props) => {

  return (
    <section id="navgroup">
    <nav>
      <a class="safeLogo" href="/user/auctions">
        <img class="logoimg" src={require("../img/Picture1.png")} alt="Silent Auction"/>
      </a>
      <div class="links">
    <Link to="/user/auctions">Auctions</Link>
    <Link class="signup" to="/user/profile">View Profile</Link>
    <Link to="/">LogOut</Link>
    </div>
    </nav>
    </section>
  )
};

export default NavBar;
