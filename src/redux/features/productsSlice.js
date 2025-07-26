import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';

const productsAdapter=createEntityAdapter();

const initialState=productsAdapter.getInitialState({
	status:'idle',
	error:null,
});

export const fetchProducts=createAsyncThunk(
	'products/fetchProducts',
	async ()=>{
		const res=await fetch('https://fakestoreapi.com/products');
		const data=await res.json();
		return data;
	}
	);

const productsSlice=createSlice({
	name:'products',
	initialState,
	reducers:{},
	extraReducers:(builder)=>{
		builder
		.addCase(fetchProducts.pending, (state)=>{
			state.status='loading';
		}
			)
		.addCase(fetchProducts.fulfilled, (state, action)=>{
			state.status='succeeded';
			productsAdapter.setAll(state, action.payload);
		}
			)
		.addCase(fetchProducts.rejected, (state, action)=>{
			state.status='failed';
			state.error=action.error.message;
		}

			);
	

	},
});

export default productsSlice.reducer;

export const {
	selectAll:selectAllProducts,
	selectById:selectProductById,
}=productsAdapter.getSelectors((state)=>state.products);

