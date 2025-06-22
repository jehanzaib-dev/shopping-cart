import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import { GlobalContext } from "../context/context";
import "./ProductDetailsStyles.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(GlobalContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader/>;

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
