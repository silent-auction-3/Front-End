import React from "react";
import { useForm } from 'react-hook-form';
export default function StartAuction() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  return (
    <div >
      <h2>Start an auction</h2>
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
      <input type="url" placeholder="Image" name="Image" ref={register({required: "Image is required", pattern: /^\S+@\S+$/i})} />
      {errors.Image && <p style={{color:"red"}}>*{errors.Image.message}</p>}

      <input type="submit" />
    </form>
    </div>
  );
}
