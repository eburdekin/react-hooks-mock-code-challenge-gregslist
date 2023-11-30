import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const API = 'http://localhost:6001/listings'

function App() {

  const [listings, setListings] = useState([])
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(setListings)
  }, [])

  function handleFavorite(id) {
    setListings(listings.map(listing => listing.id === id ? {...listing, favorited: !listing.favorited} : listing))
  }

  function handleDelete(id) {
    fetch(`${API}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(
      setListings(listings.filter(listing => listing.id !== id))
    )
  }

  function handleFilter(searchTerm) {
    setFilter(searchTerm)
  }

  const filteredListings = listings.filter(listing => filter === 'All' ? listing : listing.description.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="app">
      <Header handleFilter={handleFilter} />
      <ListingsContainer listings={filteredListings} handleFavorite={handleFavorite} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
