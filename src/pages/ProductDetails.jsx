import React, { useEffect, useState,useCallback, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import { GlobalContext } from "../context/context";
import "./ProductDetailsStyles.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(GlobalContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const fetchProduct = useCallback(async () => {
  try {
    setLoading(true);
    setError(null);
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    const data = await res.json();
    setProduct(data);
  } catch (err) {
    setError("Failed to load product.");
  } finally {
    setLoading(false);
  }
}, [id]);

useEffect(() => {
  fetchProduct();
}, [fetchProduct]);

  

  if (loading) return <Loader/>;
  if (error){ 
    return ( 
    <div className="error-message">
      <p>{error}</p>
      <button onClick={fetchProduct} className="retry-btn">Retry
      </button>
    </div>
    );
  }

  if (!product) return <p style={{ textAlign: "center" }}>Product not found</p>;

  return (
    <div className="container product-details">
      <img src={product.image} alt={product.title} />
      <div className="details-content">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <button className="add-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <Link to="/" className="back-link">← Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
