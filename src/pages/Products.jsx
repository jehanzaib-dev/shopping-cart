import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { fetchProducts, selectAllProducts } from "../redux/features/productsSlice";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import "./ProductsStyles.css";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectAllProducts);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "name-az": return a.title.localeCompare(b.title);
        case "name-za": return b.title.localeCompare(a.title);
        default: return 0;
      }
    });

  return (
    <div className="container">
      <h2>Products</h2>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name-az">Name: A to Z</option>
          <option value="name-za">Name: Z to A</option>
        </select>
      </div>

      {status === "loading" ? (
        <Loader />
      ) : status === "failed" ? (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => dispatch(fetchProducts())} className="retry-btn">Retry</button>
        </div>
      ) : (
        <div className="product-cntnr">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={(item) => dispatch(addToCart(item))}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
