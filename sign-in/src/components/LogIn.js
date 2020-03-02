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
      <h2>Log In PAGE</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
       <label>Username</label>   
      <input type="text" placeholder="Username" name="Username" ref={register({required: true, maxLength: 80})} />
      <label>Password</label>   
      <input type="password" placeholder="Password" name="Password" ref={register({required: true})} />
       {errors.Password && <p>This field is required</p>}
      <input type="submit" />
    </form>
    </div>

  );
}
