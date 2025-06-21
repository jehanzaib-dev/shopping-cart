import React from "react";
import "./ProductCardStyles.css";

const ProductCard = ({ product, addToCart }) => {
  //if (!product) return null; // Optional: prevent crash

  return (
    <div className="product-card">
      <img className="product-img" src={product.image} alt={product.name} />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
