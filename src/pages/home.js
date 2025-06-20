import {useState, useEffect} from 'react';
import Product from '../components/product.js';
import './homeStyles.css';


export default function Home(){

  const [productList, setProductList]=useState([]);
	const [loading, setLoading]=useState(false);


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


	useEffect(()=>{
		fetchProducts();
	},[]);

	return(
		<div className='products-cntnr'>
		{
			loading?<p>loading</p>:
			productList && productList.length ?
			productList.map((item)=><Product key={item.id} product={item}/>):null
		}

		</div>
		);
}
