import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from "react-router-dom";
import ItemCard from "./ItemCard";
import styled from "styled-components";
const ListDiv = styled.div`

`;
const HeaderDiv = styled.div`
margin: auto;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  padding: 10px;

`
const AuctionListDiv = styled.div`

`
const BidListDiv = styled.div`
border:1px solid black;
width:30%;
display:flex;
flex-direction:column;
align-items:center;
`
const ColumnDiv = styled.div`
display:flex;
justify-content:space-around;
`
const UserPage = props => {
  const [items, setItems] = useState([]);
  const [bids, setBids] = useState([])
  useEffect(() => {
    const getItems = () => {
      axios
        .get('http://localhost:5000/api/items')
        .then(response => {
          setItems(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    const getBids = () => {
        axios
          .get('http://localhost:5000/api/bidlist')
          .then(response => {
            setBids(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
    
    getItems();
    getBids();
  }, []);
  
  return (
    <ListDiv className="auction-list">
        <h2>UserPage</h2>

        <NavLink to="/user/auctions" style={{color:"orange"}}>View Auctions</NavLink>
        <Link to="/user/start">Start an Auction</Link>
        <ColumnDiv>
        <AuctionListDiv>
        <h4>My Auctions</h4>
        {items.map(item => (
        <Link to={`./items/${item.id}`} style={{ textDecoration: 'none' , color:`black`}} >
        <ItemCard key={item.id} item={item} />
        </Link>
      ))}
      </AuctionListDiv>
      <BidListDiv>
      <h3>My Bids</h3>
      {bids.map(bid => (
        <Link to={`./items/${bid.id}`} style={{ textDecoration: 'none' , color:`black`}} >
        <h4>{bid.name}</h4>
      <p>${bid.bidAmount}</p>
        </Link>
      ))}
      </BidListDiv>
      </ColumnDiv>  
    </ListDiv>

  );
}

export default UserPage;
