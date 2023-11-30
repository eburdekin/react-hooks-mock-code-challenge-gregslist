import React from "react";
import Search from "./Search";

function Header({handleFilter}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleFilter={handleFilter} />
    </header>
  );
}

export default Header;
