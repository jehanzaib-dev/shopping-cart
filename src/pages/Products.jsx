import React, {useState, useEffect, useContext} from 'react';
import {GlobalContext} from '../context/context.js';
import ProductCard from '../components/ProductCard.jsx';
import Loader from '../components/Loader.jsx';
import './ProductsStyles.css';


const Products=()=>{

  const [productList, setProductList]=useState([]);
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

	return(
		<div className='products-cntnr'>
		<h2>Products</h2>
		 {loading ? <Loader/> :
		 error ? (
  <div className="error-message">
  	<p>{error}</p>
  	<button onClick={fetchProducts} className="retry-btn">Retry</button>
  	</div>
		) :(
        <div className="product-grid">
          {productList.map((product) => (
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

