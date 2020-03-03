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
      <input type="text" placeholder="Item name" name="Item name" ref={register({required: true, maxLength: 80})} />
      <label>Description</label>   
      <textarea name="Description" ref={register({required: true, maxLength: 200})} />
      <label>Starting Price</label>   
      <input type="number" placeholder="Price" name="Price" ref={register({required: true, min: 1, maxLength: 12})} />
      <label>Image URL</label>   
      <input type="url" placeholder="Image" name="Image" ref={register({required: true, pattern: /^\S+@\S+$/i})} />

      <input type="submit" />
    </form>
    </div>
  );
}