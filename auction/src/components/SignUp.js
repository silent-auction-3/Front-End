import React from "react";
import { useForm } from 'react-hook-form';
export default function SignUp() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  return (
    <div >
      <h2>Sign Up PAGE</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email Address</label>
      <input type="email" placeholder="Email Address" name="Email Address" ref={register({required: true})} />
      <label>Username</label>
      <input type="text" placeholder="Username" name="Username" ref={register({required: true, maxLength: 80})} />
      <label>Password</label>
      <input type="password" placeholder="Password" name="Password" ref={register({required: true})} />
      <label>Name</label>
      <input type="text" placeholder="Name" name="Name" ref={register({required: true})} />
      <label>Address</label>
      <input type="text" placeholder="Address" name="Address" ref={register({required: true})} />
      <label>Phone Number</label>
      <input type="text" placeholder="Phone Number" name="Phone Number" ref={register} />
      <label>Bidder or Seller?</label>
      <span>Bidder:</span>
      <input className="select" name="BidderSeller" type="radio" value="Bidder" ref={register}/>
      <span>Seller:</span>
      <input className="select" name="BidderSeller" type="radio" value="Seller" ref={register}/>

      <input type="submit" />
    </form>
    </div>
  );
}