import React from "react";

function ListingCard({listing, handleFavorite, handleDelete}) {

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {listing.favorited ? (
          <button className="emoji-button favorite active" onClick={(e) => handleFavorite(listing.id)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={(e) => handleFavorite(listing.id)}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={(e) => handleDelete(listing.id)} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
