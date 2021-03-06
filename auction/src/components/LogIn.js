import React from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function LogIn(props) {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const onSubmit = value => {
    axios.post('https://silent-auction-backend.herokuapp.com/api/auth/login', value)
    .then(response => {
      console.log(response);
      window.localStorage.setItem('token', response.data.token)
      history.push('/user/profile')
    })
    .catch(err => console.log(err));
  }

  return (
    <div>
      <div class="mainlogo">
      <img  src={require("../img/Picture1.png")} alt="Silent Auction"/>
      </div>

      <div className="logBox">
      <h2 className="HeaderStyle">Log In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
       <label>Username</label>   

      <input type="text" 
             placeholder="Username" 
             name="username" 
             ref={register({required: "Username Required", maxLength: 80})} />
      {errors.Username && <p style={{color:"red"}}>*{errors.Username.message}</p>}

      <label>Password</label>   
      <input type="password" 
             placeholder="Password" 
             name="password" 
             ref={register({required: "Password Required"})} />
       {errors.Password && <p style={{color:"red"}}>*{errors.Password.message}</p>}
      <input type="submit" />
    </form>
    </div>
    </div>

  );

}

export default LogIn;


  