import React from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// export default function SignUp() {
//     const { register, handleSubmit, errors } = useForm();
//     const onSubmit = data => console.log(data);
//     console.log(errors);

function SignUp(props) {
  const { register, handleSubmit, errors} = useForm();
  const history = useHistory();
  const onSubmit = value => {
    axios.post('https://silent-auction-backend.herokuapp.com/api/auth/register', value)
    .then(response => {
      console.log(response);
//       windows.localStorage.setItem('token', response.data.token)
      history.push('/')
    })
    .catch(err => console.log(err));
  }

  return (
    <div >
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email Address</label>
      <input type="email" 
             placeholder="Email Address" 
             name="email" 
             ref={register({required: true})} />
      {errors.EmailAddress && <p style={{color:"red"}}>*This is a required field</p>}

      <label>Username</label>
      <input type="text" 
             placeholder="Username" 
             name="username" 
             ref={register({required: "Username Required", maxLength: {value:64,message:"Username is too long"}})} />
      {errors.Username && <p style={{color:"red"}}>*{errors.Username.message}</p>}

      <label>Password</label>
      <input type="password" 
             placeholder="Password" 
             name="password" 
             ref={register({required: "Password Required", maxLength: {value:64,message:"Password is too long"}})} />
      {errors.Password && <p style={{color:"red"}}>*{errors.Password.message}</p>}

      <label>Name</label>
      <input type="text" 
             placeholder="Name" 
             name="full_name" 
             ref={register({required: true})} />
      {errors.Name && <p style={{color:"red"}}>*This is a required field</p>}

      <label>Address</label>
      <input type="text" 
             placeholder="Address" 
             name="address" 
             ref={register({required: true})} />
      {errors.Address && <p style={{color:"red"}}>*This is a required field</p>}

      <label>Phone Number</label>
      <input type="text" 
             placeholder="Phone Number" 
             name="phone_number" 
             ref={register} />

      <input type="submit" />
    </form>
    </div>
  );
}

export default SignUp;