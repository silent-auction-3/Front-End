  
import React, { Component } from "react";
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

// export default function LogIn() {
//     const { register, handleSubmit, errors } = useForm();
//     const onSubmit = data => {
//         console.log(data);
//     }
const { register, handleSubmit, errors } = useForm();
// const onSubmit = data => {
//   console.log(data);
// }
    

class LogIn extends Component {
      constructor() {
        super();
    
        this.state = {
          username: "",
          password: ""
        };
        console.log(this.props);
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
            console.log(this.props);
            this.props.history.push('/dashboard')
          })
          .catch(err => console.log(err));
      }
    }

    return (
      <div >
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>

         <label>Username</label>   
        <input type="text" 
               placeholder="Username" 
               name="Username" ref={register({required: "Username Required", maxLength: 64})}
               value={this.state.username}
              onChange={this.handleChange}/>
        {errors.Username && <p style={{color:"red"}}>*{errors.Username.message}</p>}
        
        <label>Password</label>   
        <input type="password" 
               placeholder="Password" 
               name="Password" ref={register({required: "Password Required"})}
               value={this.state.password}
               onChange={this.handleChange} />
         {errors.Password && <p style={{color:"red"}}>*{errors.Password.message}</p>}
        <input type="submit" />
      </form>
      </div>
  
    );

    export default LogIn;
