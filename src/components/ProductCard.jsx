import React from "react";
import "./ProductCardStyles.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  //if (!product) return null; // Optional: prevent crash

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
      <img className="product-img" src={product.image} alt={product.name} />
      <h3 className="product-name">{product.name}</h3>
    </Link>
     <p className="product-tagline">{product.title}</p> 
    <Link to={`/product/${product.id}`} className="view-details-btn">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
