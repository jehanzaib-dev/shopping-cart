import {createContext} from 'react';
import {useState} from 'react';

export const GlobalContext=createContext(null);

export default function GlobalState({children}){
	const [cartItems, setCartItems]=useState([]);


	function handleAddtoCart(currentItem){
		//console.log(currentItem);
		let cpyCartItems=[...cartItems];
		const index=cpyCartItems.findIndex(item=>item.id===currentItem.id);
		if(index===-1){
			cpyCartItems.push(currentItem);
		}
		else{
			cpyCartItems.splice(index,1);
		}
		setCartItems(cpyCartItems);
		console.log(cartItems);
	}


	return(
	<GlobalContext.Provider value={{cartItems, setCartItems, handleAddtoCart}}>
	{children}
	</GlobalContext.Provider>
	);
}