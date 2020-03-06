import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from "../utils/axiosWithAuth"; 

export default function LogIn(props) {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
      data.auction_id = 5;
        console.log(data);
        console.log("creatingbid")
        axiosWithAuth()
        .post('https://silent-auction-backend.herokuapp.com/api/bids/', data)
        .then(response => {
          console.log("userbids", response.data)
        })
        .catch(error => {
          console.error('Server Error', error.response.data);
        });
  
    }
    console.log(errors);
  return (
    <div >
      <h4>Info</h4>
      <p>Seller: {props.item.seller_name}</p>
      <p>Starting Price: ${props.item.start_price}</p>
      <div>
      <h3>Bid History</h3>
  <h4 style={{color:"lightgreen"}}>Highest Bid: ${props.highestBid}</h4>
      {props.bids.map(bid => (
        <div key={bid} className="bid">
          <p>{bid.buyer_name}: ${bid.bid_amount}</p>

        </div>
      ))}
    </div>
      <form onSubmit={handleSubmit(onSubmit)}>
       <label>Place a bid</label>   
       <input type="number" 
              placeholder="Enter an amount" 
              name="bid_amount" 
              ref={register({required: "Amount Required",min: (props.highestBid + 1)})} />
       {errors.BidAmount && <p style={{color:"red"}}>*Amount should be higher than ${props.highestBid} </p>}
      <input type="submit" />
    </form>
    </div>

  );
}