import React from "react";
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from "../utils/axiosWithAuth"; 

export default function StartAuction() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
      console.log("creatingauction")
      data.category_id = 1;
      axiosWithAuth()
      .post('https://silent-auction-backend.herokuapp.com/api/auctions/', data)
      .then(response => {
        console.log("userauctions", response.data)
      })
      .catch(error => {
        console.error('Server Error', error.response.data);
      });
    };
    console.log(errors);
    
  return (
    <div >
      <h2>Start an auction</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Item</label>   
      <input type="text" 
             placeholder="Item name" 
             name="title" 
             ref={register({required: "Name is required", maxLength: 80})} />
      {errors.ItemName && <p style={{color:"red"}}>*{errors.ItemName.message}</p>}

      <label>Description</label>   
      <textarea name="description" 
                ref={register({required: "Description is required", maxLength: 200})} />
      {errors.Description && <p style={{color:"red"}}>*{errors.Description.message}</p>}

      <label>Starting Price</label>   
      <input type="number" 
             placeholder="Price" 
             name="start_price" 
             ref={register({required: "Price is required", min: {value:1,message:"Price should be above $1"}, maxLength: 12})} />
      {errors.Price && <p style={{color:"red"}}>*{errors.Price.message}</p>}

      {/* <label>Image URL</label>   
      <input type="text" 
             placeholder="Image" 
             name="image_url" 
             ref={register({required: "Image is required", pattern: /^\S+@\S+$/i})} />
      {errors.Image && <p style={{color:"red"}}>*{errors.Image.message}</p>} */}

      <label>Length of Auction</label>   
      <select name="num_days" 
              ref={register({ required: "This is required" })}>
        <option value="3">3 days</option>
        <option value="5">5 days</option>
        <option value="7">7 days</option>
        <option value="10">10 days</option>
      </select>
      {errors.auctionLength && <p style={{color:"red"}}>*{errors.auctionLength.message}</p>}

      <input type="submit" />
    </form>
    </div>
  );
}