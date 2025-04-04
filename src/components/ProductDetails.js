import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.alert("This product is added to the cart");
};


  return product ? (
    <div className="product-detail-container">
      <div className="detail-image-container">
        <img src={product.image} alt={product.title} className="detail-image" />
      </div>
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p className="amazon-price">${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button className="amazon-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  ) : (
    <p className="loading">Loading product details...</p>
  );
};

export default ProductDetails;
