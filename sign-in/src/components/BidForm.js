import React, { useState } from "react";
import { useForm } from 'react-hook-form';
export default function LogIn(props) {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    console.log(errors);
  return (
    <div >
      <h4>Info</h4>
      <p>Seller: LoremIpsum</p>
      <form onSubmit={handleSubmit(onSubmit)}>
       <label>Place a bid</label>   
       <input type="number" placeholder="Enter an amount" name="BidAmount" ref={register({required: "Amount Required",min: (props.item.price + 1)})} />
       {errors.BidAmount && <p style={{color:"red"}}>*Amount should be higher than ${props.item.price} </p>}
      <input type="submit" />
    </form>
    </div>

  );
}
