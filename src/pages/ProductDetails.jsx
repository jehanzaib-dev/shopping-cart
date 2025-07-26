import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../redux/features/productDetailsSlice";
import { addToCart } from "../redux/features/cartSlice";
import Loader from "../components/Loader";
import "./ProductDetailsStyles.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, status, error } = useSelector((state) => state.productDetails);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (status === "loading") return <Loader />;
  if (status === "failed") {
    return (
      <div className="error-message">
        <p>{error}</p>
        <button onClick={() => dispatch(fetchProductById(id))} className="retry-btn">Retry</button>
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
        <button className="add-btn" onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
        <Link to="/" className="back-link">← Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
