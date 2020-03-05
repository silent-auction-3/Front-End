import React, { useState } from 'react';
import * as moment from 'moment';
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
width:400px;
height:500px;
`;

const ItemCard = (props) => {

  return (
    <CardDiv className="item-card">
      <h2>{props.item.title}</h2>
      <div className="item-image">
        <ImageS src={props.item.image_url} />
      </div>
      <p>{props.item.start_date}</p>
    </CardDiv>
  )
};

export default ItemCard;
