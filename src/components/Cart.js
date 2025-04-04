import React from "react";

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
