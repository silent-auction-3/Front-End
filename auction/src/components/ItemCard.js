import React from 'react';
import Countdown from "react-countdown-now";
import styled from "styled-components";
import * as moment from "moment";

const ImageS = styled.img`
    width: 100%;
  height: 300px;
  object-fit: cover;
`;

const CardDiv = styled.div`
border-radius:20px;
padding:20px;
margin-top:50px;
width:400px;
height:500px;
background-color:rgba(15, 26, 36, 0.4);
color:#eeebb0;
`;

const TimeSpan = styled.span`
display:flex;
justify-content:center;
font-size:50px;
`;

const TimeTell = styled.div`
text-align:center;
font-size:20px;
`;

const TimeDiv = styled.div`
margin-top:10px;
display:flex;
justify-content:center;
flex-direction:column;
border:1px solid orange;
background-color:rgba(94, 49, 23, 0.6);
`;

const AuctionOver = () => <span>The Auction has ended!</span>;

const renderer = ({ days,hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AuctionOver />;
  } else {
    // Render a countdown
    return (
      <TimeDiv>
      <TimeTell>
        Time Left
        </TimeTell>
      <TimeSpan>
        {days}d:{hours}h:{minutes}m:{seconds}s
      </TimeSpan>

      </TimeDiv>
    );
  }
};

const ItemCard = (props) => {
  const NewDate = () => {
    var bing = props.item.start_date
    var lest = moment(bing).add(props.item.num_days, 'days').format("YYYY-MM-DDTHH:mm:ss.SSSSZ");
    return lest.toString();
  };
  return (
    <CardDiv className="item-card">
      <h2>{props.item.title}</h2>
      <h2>{props.item.id}</h2>
      <div className="item-image">
        <ImageS src={props.item.image_url} />
      </div>
      <Countdown date={NewDate()} renderer={renderer} />
    </CardDiv>
  )
};

export default ItemCard;