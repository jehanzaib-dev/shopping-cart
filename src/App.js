import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products.jsx";
import Cart from "./pages/cart";
import Navbar from "./components/navbar";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/footer.jsx";
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
