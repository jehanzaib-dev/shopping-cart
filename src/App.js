import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products.jsx";
import Cart from "./pages/cart";
import Navbar from "./components/navbar";
import Footer from "./components/footer.jsx";
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
