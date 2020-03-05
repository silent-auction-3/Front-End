import React from "react";
import { useForm } from 'react-hook-form';
export default function LogIn() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    console.log(errors);
  return (
    <div >
      <h2>Log In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
       <label>Username</label>   
      <input type="text" placeholder="Username" name="Username" ref={register({required: "Username Required", maxLength: 80})} />
      {errors.Username && <p style={{color:"red"}}>*{errors.Username.message}</p>}
      <label>Password</label>   
      <input type="password" placeholder="Password" name="Password" ref={register({required: "Password Required"})} />
       {errors.Password && <p style={{color:"red"}}>*{errors.Password.message}</p>}
      <input type="submit" />
    </form>
    </div>

  );
}
