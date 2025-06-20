import {useState} from 'react';
import {useContext} from 'react';
import {useEffect} from 'react';
import {GlobalContext} from '../context/context.js';
import Product from '../components/product.js';

export default function Cart(){

	const [totalPrice, setTotalPrice]=useState(0);

	const {cartItems}=useContext(GlobalContext);

	function calctotal(){
		let sum=0;
		cartItems.forEach(item=>sum+=item.price);
		console.log(sum);
		setTotalPrice(sum);
	}



	useEffect(()=>{
		calctotal();

	},[cartItems]);

	return(
		<div className='products-cntnr'>
		{
			cartItems && cartItems.length ?
			cartItems.map((item)=><Product key={item.id} product={item}/>):null
		}
			<div>
			{totalPrice}
			</div>
		</div>
		);
}