import React from "react";
import { useForm } from 'react-hook-form';
export default function StartAuction() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  return (
    <div className="logBox">
      <h2 className="HeaderStyle">Start an Auction</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Item</label>   
      <input type="text" placeholder="Item name" name="ItemName" ref={register({required: "Name is required", maxLength: 80})} />
      {errors.ItemName && <p style={{color:"red"}}>*{errors.ItemName.message}</p>}
      <label>Description</label>   
      <textarea name="Description" ref={register({required: "Description is required", maxLength: 200})} />
      {errors.Description && <p style={{color:"red"}}>*{errors.Description.message}</p>}
      <label>Starting Price</label>   
      <input type="number" placeholder="Price" name="Price" ref={register({required: "Price is required", min: {value:1,message:"Price should be above $1"}, maxLength: 12})} />
      {errors.Price && <p style={{color:"red"}}>*{errors.Price.message}</p>}
      <label>Image URL</label>   
      <input type="url" placeholder="Image" name="Image" ref={register({required: "Image is required"})} />
      {errors.Image && <p style={{color:"red"}}>*{errors.Image.message}</p>}
      <label>Length of Auction</label>   
      <select name="auctionLength" ref={register({ required: "This is required" })}>
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
