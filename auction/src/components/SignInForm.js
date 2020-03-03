import React, { Component } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    axiosWithAuth()
      .post("/api/auth/login", this.state)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.id);
        localStorage.setItem('type', res.data.type);
        this.props.history.push('./dashboard')
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="username">
              username
            </label>
            <input
              type="username"
              id="username"
              className="FormField__Input"
              placeholder="Enter your username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>{" "}
            <Link to="/" className="FormField__Link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;