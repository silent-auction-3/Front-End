import React from "react";
import { useForm } from 'react-hook-form';
export default function SignUp() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  return (
    <div >
      <div class="mainlogo">
      <img  src={require("../img/Picture1.png")} alt="Ride For Life logo"/>
      </div>
      <div className="logBox">
      <h2 className="HeaderStyle">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email Address</label>
      <input type="email" placeholder="Email Address" name="EmailAddress" ref={register({required: true})} />
      {errors.EmailAddress && <p style={{color:"red"}}>*This is a required field</p>}
      <label>Username</label>
      <input type="text" placeholder="Username" name="Username" ref={register({required: "Username Required", maxLength: {value:64,message:"Username is too long"}})} />
      {errors.Username && <p style={{color:"red"}}>*{errors.Username.message}</p>}
      <label>Password</label>
      <input type="password" placeholder="Password" name="Password" ref={register({required: "Password Required", maxLength: {value:64,message:"Password is too long"}})} />
      {errors.Password && <p style={{color:"red"}}>*{errors.Password.message}</p>}
      <label>Name</label>
      <input type="text" placeholder="Name" name="Name" ref={register({required: true})} />
      {errors.Name && <p style={{color:"red"}}>*This is a required field</p>}
      <label>Address</label>
      <input type="text" placeholder="Address" name="Address" ref={register({required: true})} />
      {errors.Address && <p style={{color:"red"}}>*This is a required field</p>}
      <label>Phone Number</label>
      <input type="text" placeholder="Phone Number" name="Phone Number" ref={register} />
      {/* <label>Bidder or Seller?</label>
      <span>Bidder:</span>
      <input className="select" name="BidderSeller" type="radio" value="Bidder" ref={register}/>
      <span>Seller:</span>
      <input className="select" name="BidderSeller" type="radio" value="Seller" ref={register}/> */}

      <input type="submit" />
    </form>
    </div>
    </div>
  );
}
