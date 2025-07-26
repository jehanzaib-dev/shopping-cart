import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice.js';
import themeReducer from './features/themeSlice.js';
import productsReducer from './features/productsSlice.js';
import productDetailsReducer from './features/productDetailsSlice.js';


const store=configureStore({
	reducer:{
		products:productsReducer,
		productDetails:productDetailsReducer,
		cart:cartReducer,
		theme:themeReducer
	},
});

export default store;