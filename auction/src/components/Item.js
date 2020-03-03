import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from "./ItemCard";
import { useParams } from 'react-router-dom';
import styled from "styled-components";

const BidButton = styled.button`
border:1px solid black;
padding:20px;
margin-left:auto;
margin-right:auto;
display:flex;
margin-top:20px;
`;
const Item = (props) => {
  const [item, setItem] = useState('');
  const id = useParams();
  console.log(props);
  useEffect(() => {
       axios
        .get(`http://localhost:5000/api/items/${id.id}`)
        .then(response => {
          setItem(response.data);
          console.log(response.data,"Item data");
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  

  return (
    <div className="bid-wrapper">
      <ItemCard key={item.id} item={item} />
      <BidButton className="bid-button">Bid on Item</BidButton>
    </div>
  );
}

export default Item;