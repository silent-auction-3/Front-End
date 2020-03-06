import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from "./ItemCard";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import BidForm from "./BidForm";

const BidWrapper = styled.div`
width:50%;
margin-left:15%;
display:flex;
flex-direction:column;
`;
const FormWrapper = styled.div`
width:300px;
margin-top:50px;
color:#dddddd;
padding-left:10px;
padding-right:10px;
background-color:rgba(15, 26, 36, 0.582);
text-align:center;
`;
const ItemWrapper = styled.div`
display:flex;
`;
const DescriptionWrap = styled.p`
width:400px;
margin-left:10px;
color:#dddddd;
`;
const Item = (props) => {
  const [item, setItem] = useState('');
  const [bids, setBids] = useState([]);
  const [highestBid,setHighestBid] = useState(0);
  const id = useParams();
  console.log(props);
  useEffect(() => {
       axios
        .get(`https://silent-auction-backend.herokuapp.com/api/public/auctions/${id.id}`)
        .then(response => {
          setItem(response.data);
          setBids(response.data.bids);
          const bidList = response.data.bids.map(bid => parseInt(bid.bid_amount));
          setHighestBid(Math.max.apply(Math,bidList));
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  

  return (
    <ItemWrapper>
    <BidWrapper className="bid-wrapper">
      <ItemCard key={item.id} item={item} />
      <DescriptionWrap>Description: {item.description}</DescriptionWrap>
    </BidWrapper>
    <FormWrapper>
    <BidForm item={item} bids={bids} highestBid={highestBid} />
    </FormWrapper>
    </ItemWrapper>
  );
}

export default Item;
