import React, {useState, useEffect, useContext} from 'react';
import {GlobalContext} from '../context/context.js';
import ProductCard from '../components/ProductCard.jsx';
import Loader from '../components/Loader.jsx';
import './ProductsStyles.css';


const Products=()=>{

  const [productList, setProductList]=useState([]);
  const [searchTerm, setSearchTerm] = useState("");
	const [sortOption, setSortOption] = useState("");

	const [loading, setLoading]=useState(false);
	const [error, setError] = useState(null);

	const {addToCart}=useContext(GlobalContext);

	const fetchProducts = async () => {
  try {
    setLoading(true); // Start loading again
    setError(null);   // Clear previous error

    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Server responded with an error.");
    }

    const data = await response.json();
    setProductList(data);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    setError("Failed to load products. Please check your internet connection or try again.");
  } finally {
    setLoading(false);
  }
};
	

	console.log(productList);
	useEffect(()=>{
		fetchProducts();
	},[]);

	const filteredProducts = productList
  .filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name-az":
        return a.title.localeCompare(b.title);
      case "name-za":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });



	return(
		<div className='products-cntnr'>
		<div className="filter-bar">
  	<input
    type="text"
    placeholder="Search products..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  	/>

  	<select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
    <option value="">Sort By</option>
    <option value="price-low">Price: Low to High</option>
    <option value="price-high">Price: High to Low</option>
    <option value="name-az">Name: A to Z</option>
    <option value="name-za">Name: Z to A</option>
  </select>
</div>
		<h2>Products</h2>
		 {loading ? <Loader/> :
		 error ? (
  	<div className="error-message">
  	<p>{error}</p>
  	<button onClick={fetchProducts} className="retry-btn">Retry</button>
  	</div>
		) :(
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
		);
}

export default Products;

