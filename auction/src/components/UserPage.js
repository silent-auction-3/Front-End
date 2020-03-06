import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import styled from "styled-components";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Delete from "./Delete";

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
border:1px solid black;
width:30%;
text-align:center;
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
      axiosWithAuth()
        .get('https://silent-auction-backend.herokuapp.com/api/users/auctions')
        .then(response => {
          setItems(response.data);
          console.log("usersauctions", response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    const getBids = () => {
        axiosWithAuth()
          .get('https://silent-auction-backend.herokuapp.com/api/users/bids')
          .then(response => {
            const updatedBids = attachAuctionsToBids(response.data)
            setBids(updatedBids);
            console.log("userbids", response.data);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
    
    getItems();
    getBids();
  }, []);

  function attachAuctionsToBids(data) {
    return data;
  }

  return (
    <ListDiv className="auction-list">
        <div className="userPage">
        <h3 className="HeaderStyle">UserPage</h3>
        <button className="startAuction">
        <Link to="/user/start">Start an Auction</Link>
        </button>
        </div>
        <ColumnDiv>
        <AuctionListDiv>
        <h3>My Auctions</h3>
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
