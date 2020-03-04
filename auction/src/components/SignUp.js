import React, { Component } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";

// export default function SignUp() {
    const { register, handleSubmit, errors } = useForm();
    // const onSubmit = data => console.log(data);
    // console.log(errors);

    class SignUpForm extends Component {
      constructor() {
        super();

        this.state = {
          username: "",
          password: "",
          name: "",
          address: "",
          phone_number: "",
          email: "",
          type: null
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(e) {
        let target = e.target;
        let value = target.type === 'type' ? JSON.parseInt(target.value) : target.value;
        let name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      handleSubmit(e) {
        e.preventDefault();
        console.log("The form was submitted with the following data:");
        console.log(this.state);
        axios
          .post("https://app-replate2.herokuapp.com/api/auth/register", this.state)
          .then(res => {
            console.log(res);
            this.props.history.push('/sign-in');
          })
          .catch(err => console.log(err));
      }
    }       

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={this.handleSubmit}>
      <label>Email Address</label>
      <input type="email" 
             placeholder="Email Address" 
             name="EmailAddress" 
             ref={register({required: true})}
             value={this.state.email}
             onChange={this.handleChange} />
      {errors.EmailAddress && <p style={{color:"red"}}>*This is a required field</p>}
      
      <label>Username</label>
      <input type="text" 
             placeholder="Username" 
             name="Username" 
             ref={register({required: "Username Required", maxLength: {value:64,message:"Username is too long"}})}
             value={this.state.username}
             onChange={this.handleChange} />
      {errors.Username && <p style={{color:"red"}}>*{errors.Username.message}</p>}
      
      <label>Password</label>
      <input type="password" 
             placeholder="Password" 
             name="Password" 
             ref={register({required: "Password Required", maxLength: {value:64,message:"Password is too long"}})}
             value={this.state.password}
             onChange={this.handleChange} />
      {errors.Password && <p style={{color:"red"}}>*{errors.Password.message}</p>}
      
      <label>Name</label>
      <input type="text" 
             placeholder="Name" 
             name="Name" 
             ref={register({required: true})}
             value={this.state.name}
             onChange={this.handleChange} />
      {errors.Name && <p style={{color:"red"}}>*This is a required field</p>}
      
      <label>Address</label>
      <input type="text" 
             placeholder="Address" 
             name="Address" 
             ref={register({required: true})}
             value={this.state.address}
             onChange={this.handleChange} />
      {errors.Address && <p style={{color:"red"}}>*This is a required field</p>}
      
      <label>Phone Number</label>
      <input type="text" 
             placeholder="Phone Number" 
             name="Phone Number"
             ref={register}
             value={this.state.phone_number}
             onChange={this.handleChange} />

      {/* <label>Bidder or Seller?</label>
      <span>Bidder:</span>
      <input className="select" name="BidderSeller" type="radio" value="Bidder" ref={register}/>
      <span>Seller:</span>
      <input className="select" name="BidderSeller" type="radio" value="Seller" ref={register}/> */}

      <input type="submit" />
    </form>
    </div>
  );

  export default SignUp;