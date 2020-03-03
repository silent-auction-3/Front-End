import React, { useState, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Page from "./Page";
import "../App.css";

const AddBid = props => {

  const id = localStorage.getItem('userId');
  const idNum = parseInt(id);
  console.log(idNum);

  const [pickup, setPickup] = useState({
    food_type: "",
    amount: "",
    pickup_time: "",
    complete: false,
    business_id: idNum
  });

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    // .post('/api/bids/', bids) Need api for bids
    .then(res => {
        console.log(res)
        props.history.push('/dashboard')
    })
    .catch(err => console.log(err))
  };

  const handleChange = e => {
    setPickup({
        ...pickup,
        [e.target.name]: e.target.value
      });
}

  return (
    <Page>
    <div>
      <h1 className="add-bids">Add Bid</h1>
      <form className="FormFields" onSubmit={handleSubmit}>
        <div className="FormField">
          <input
            type="text"
            id="bid_type"
            className="FormField__Input"
            placeholder="Bid Type"
            name="bid_type"
            value={pickup.bid_type}
            onChange={handleChange}
          />
        </div>
        <div className="FormField">
          <input
            type="number"
            id="amount"
            className="FormField__Input"
            placeholder="Amount"
            name="amount"
            value={pickup.amount}
            onChange={handleChange}
          />
        </div>
        <div className="FormField">
          <input
            type="number"
            id="remaining_time"
            className="FormField__Input"
            placeholder="Remaining Time"
            name="remaining_time"
            value={pickup.remaining_time}
            onChange={handleChange}
          />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
    </Page>
  );
};

export default AddBid;