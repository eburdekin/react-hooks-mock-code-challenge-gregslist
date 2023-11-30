import React from "react";

function Search({handleFilter}) {

  function handleSubmit(e) {
    e.preventDefault();
    handleFilter(e.target.search.value)
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={(e) => handleFilter(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
