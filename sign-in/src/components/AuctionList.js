import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import styled from "styled-components";
const ListDiv = styled.div`
margin: auto;
  width: 50%;
  padding: 10px;

`;
const AuctionList = props => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const getItems = () => {
      axios
        .get('http://localhost:5000/api/Items')
        .then(response => {
            const itemList = response.data.filter(item =>
            item.name.toLowerCase().includes(props.query.toLowerCase())
          );
          setItems(itemList);
          console.log(response.data);
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
        // <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none' , color:`black`}} >
        //   {console.log(movie.id)}
        // <MovieCard key={movie.id} movie={movie} />
        // </Link>
        <ItemCard key={item.id} item={item} />
      ))}
    </ListDiv>
  );
}

export default AuctionList;
