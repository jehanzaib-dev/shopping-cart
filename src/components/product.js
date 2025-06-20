import './productStyles.css';
import {useContext} from 'react';
import {GlobalContext} from '../context/context.js';

export default function Product({product}){

	const {cartItems, handleAddtoCart}=useContext(GlobalContext);

	return(
		<div className='product-cntnr'>
		<div className='image-cntnr'>
		<img 
			src={product?.image} 
			alt={product?.title}
		/>
		</div>
		<div className='details-cntnr'>
			<div className='title-cntnr'>
				<h3>{product?.title}</h3>
			</div>
		<p>{product?.price}</p>
		<button onClick={()=>handleAddtoCart(product)}>
		{
			cartItems.findIndex(item=>item.id === product.id)!==-1 ? 'remove from cart':'add to cart'
		}

		</button>
		</div>

		</div>
		);

}