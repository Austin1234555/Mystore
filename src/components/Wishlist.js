import React from "react";
import "../styles.css";

const Wishlist = () => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  return (
    <div className="wishlist-page">
      <h2 className="wishlist-title">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="wishlist-empty">No items in wishlist.</p>
      ) : (
        <ul className="wishlist-list">
          {wishlist.map((item, index) => (
            <li key={index} className="wishlist-item">
              <img src={item.image} alt={item.title} className="wishlist-image" />
              <div className="wishlist-info">
                <h4>{item.title}</h4>
                <p className="wishlist-price">${item.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
