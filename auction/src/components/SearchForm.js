import React, { useState } from "react";
import styled from "styled-components";
const SearchTitle = styled.h4`
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
       <button > Search! </button>
      </form>
    </section>
  );
}