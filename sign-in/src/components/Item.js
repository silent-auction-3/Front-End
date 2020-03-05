import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from "./ItemCard";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import BidForm from "./BidForm";
const BidButton = styled.button`
border:1px solid black;
padding:20px;
margin-left:auto;
margin-right:auto;
display:flex;
margin-top:20px;
`;
const BidWrapper = styled.div`
width:50%;
margin-left:15%;

`;
const FormWrapper = styled.div`
width:300px;


`;
const ItemWrapper = styled.div`
display:flex;

`;
const Item = (props) => {
  const [item, setItem] = useState('');
  const [bids, setBids] = useState([]);
  const [highestBid,setHighestBid] = useState('0');
  const id = useParams();
  console.log(props);
  useEffect(() => {
       axios
        .get(`https://silent-auction-backend.herokuapp.com/api/public/auctions/${id.id}`)
        .then(response => {
          setItem(response.data);
          setBids(response.data.bids);
          const bidList = response.data.bids.map(bid => bid.bid_amount);
          setHighestBid(Math.max(parseInt(bidList)))
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  

  return (
    <ItemWrapper>
    <BidWrapper className="bid-wrapper">
      <ItemCard key={item.id} item={item} />
      <p>Description: {item.description}</p>
    </BidWrapper>
    <FormWrapper>
    <BidForm item={item} bids={bids} highestBid={highestBid} />
    </FormWrapper>
    </ItemWrapper>
  );
}

export default Item;
