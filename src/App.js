import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import "./styles.css";

const App = () => {
  const [priceFilter, setPriceFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState(""); 

  return (
    <Router>
      <div className="app-container">
        <Navbar onFilterChange={setPriceFilter} onSearchChange={setSearchQuery} />
        <main className="content">
          <Routes>
            <Route path="/" element={<ProductList priceFilter={priceFilter} searchQuery={searchQuery} />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
