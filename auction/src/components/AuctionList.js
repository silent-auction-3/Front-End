import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import styled from "styled-components";

const ListDiv = styled.div`
margin: auto;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-around;
  padding: 10px;
  
`;
const AuctionList = props => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = () => {
      axios
        .get('https://silent-auction-backend.herokuapp.com/api/categories')
        .then(response => {
            const itemList = response.data.filter(item =>
            item.title.toLowerCase().includes(props.query.toLowerCase())
          );
          setItems(itemList);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getItems();
  }, [props.query]);
  
  return (
    <ListDiv className="auction-list">
      {items.map(item => (
        <Link to={`/user/items/${item.id}`} style={{ textDecoration: 'none' , color:`black`}} >
        <ItemCard key={item.id} item={item} />
        </Link>
      ))}
    </ListDiv>
  );
}

export default AuctionList;
