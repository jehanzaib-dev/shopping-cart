import React from "react";
import "./ProductCardStyles.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  //if (!product) return null; // Optional: prevent crash

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
      <img className="product-img" src={product.image} alt={product.name} />
    </Link>
    <div className="product-info">
  <Link to={`/product/${product.id}`} className="product-link">
    <h3 className="product-name">{product.title}</h3>
  </Link>
  <p className="product-price">${product.price.toFixed(2)}</p>
    </div>
 
    <Link to={`/product/${product.id}`} className="view-details-btn">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
