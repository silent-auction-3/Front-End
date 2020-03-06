import React, { useState } from "react";
import styled from "styled-components";
const SearchTitle = styled.h4`
font-size:20px;
text-align:center;
color:#dddddd;
`;

const SearchButton = styled.button`
padding:5px 10px 5px 10px;
border-radius:5px;
`;

export default function SearchForm(props) {
  const [query, setQuery] = useState("");
  const handleChanges = e => {
    setQuery(e.target.value);
  };
  const sendQuery = event => {
   event.preventDefault();
   props.grabQueryToSearch(query);
   setQuery("")
  }
  
  return (
    <section className="search-form" style={{display:"flex",justifyContent:"center"}}>  
     <form className="search"  onSubmit={(event)=>{sendQuery(event)}}>
     <SearchTitle>Search for an item</SearchTitle>
        <input
          type="text"
          name="name"
          onChange={handleChanges}
          tabIndex="0"
          className="search-name"
          placeholder="Search"
          autoComplete="off"
          value={query}
        />
        <div className="searchbutton">
       <SearchButton> Search! </SearchButton>
       </div>
      </form>
    </section>
  );
}
