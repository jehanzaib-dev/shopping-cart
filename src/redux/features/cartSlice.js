import {createSlice} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

const initialState={
	cartItems:JSON.parse(localStorage.getItem('cart')) || [] };

const cartSlice=createSlice({
	name:'cart',
	initialState,
	reducers:{
		addToCart:(state, action)=>{
			const product=action.payload;
			const existingItem=state.cartItems.find((item)=>item.id===product.id);
			if(existingItem){
				existingItem.quantity+=1;
			toast.info("Increased quantity.");
			}
			else{
				state.cartItems.push({...product,quantity:1});
				toast.success("Added to Cart!");
			}
			localStorage.setItem('cart', JSON.stringify(state.cartItems));
		},
		removeFromCart:(state, action)=>{
			const id=action.payload;
			state.cartItems=state.cartItems.filter((item)=>item.id !== id);
			toast.warn('Item removed');
			localStorage.setItem('cart', JSON.stringify(state.cartItems));
		},
		clearCart:(state)=>{
			state.cartItems=[];
			toast.error('Cart cleared.');
			localStorage.removeItem('cart');
		},

	},
});

export const {addToCart, removeFromCart, clearCart}=cartSlice.actions;

export default cartSlice.reducer;































