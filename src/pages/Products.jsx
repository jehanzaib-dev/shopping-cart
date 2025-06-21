import React, {useState, useEffect, useContext} from 'react';
import {GlobalContext} from '../context/context.js';
import ProductCard from '../components/ProductCard.jsx';
import './ProductsStyles.css';


const Products=()=>{

  const [productList, setProductList]=useState([]);
	const [loading, setLoading]=useState(false);

	const {addToCart}=useContext(GlobalContext);

	async function fetchProducts(){
		setLoading(true);
		try{
		const response=await fetch('https://fakestoreapi.com/products');
		const result= await response.json();
		console.log(result);
		if(result){
			setProductList(result);
			setLoading(false);
			}
		}
		catch(e){
			console.log(e);
		}
	}

	console.log(productList);
	useEffect(()=>{
		fetchProducts();
	},[]);

	return(
		<div className='products-cntnr'>
		<h2>Products</h2>
		 {loading ? (
        <div className="loader">Loading products...</div>
      ) : (
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

