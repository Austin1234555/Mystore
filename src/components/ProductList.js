import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css"; 

const ProductList = ({ priceFilter, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Products:", data); 
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const categories = [...new Set(products.map((product) => product.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filterByPrice = (product) => {
    const price = product.price;
    switch (priceFilter) {
      case "0-20": return price < 20;
      case "20-50": return price >= 20 && price < 50;
      case "50-100": return price >= 50 && price < 100;
      case "100+": return price >= 100;
      default: return true;
    }
  };

  const filteredProducts = products
    .filter((product) => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(filterByPrice)
    .filter((product) => 
      selectedCategories.length === 0 || selectedCategories.includes(product.category)
    );

  return (
    <div className="amazon-container">
      {/* Category Filters */}
      <div className="category-filters">
        <h3>Filter by Category</h3>
        {categories.map((category) => (
          <label key={category} className="category-checkbox">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="amazon-card">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} className="amazon-image" />
                <div className="amazon-details">
                  <h2 className="amazon-title">{product.title}</h2>
                  <p className="amazon-price">₹{product.price.toFixed(2)}</p>
                </div>
              </Link>
              <button
                className="amazon-button"
                onClick={() => {
                  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
                  if (!wishlist.find((item) => item.id === product.id)) {
                    wishlist.push(product);
                    localStorage.setItem("wishlist", JSON.stringify(wishlist));
                  }
                }}
              >
                Add to Wishlist
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="loading">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
