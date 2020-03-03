import React from 'react';
import styled from "styled-components";
const ImageS = styled.img`
    width: 100%;
  height: 300px;
  object-fit: cover;
`;
const CardDiv = styled.div`
border:1px solid black;
padding:20px;
margin-top:50px;
`;

const ItemCard = ({item}) => {
  const { name, description, image, price } = item;
  return (
    <CardDiv className="item-card">
      <h2>{name}</h2>
      <div className="item-description">
      {description}
      </div>
      <div className="item-image">
        <ImageS src={image} />
      </div>
      <h3>Current Price:${price} </h3>
    </CardDiv>
  )
};

export default ItemCard;
