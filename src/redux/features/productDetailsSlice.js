import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState={
	product:null,
	status:'idle',
	error:null,
};

export const fetchProductById=createAsyncThunk(
	'productDetails/fetchProductById',
	async (id)=>{
		const res=await fetch(`https://fakestoreapi.com/products/${id}`);
		const data=await res.json();
		return data;
	}
	);

const productDetailsSlice=createSlice({
	name:'productDetails',
	initialState,
	reducers:{},
	extraReducers:(builder)=>{
		builder
		.addCase(fetchProductById.pending, (state)=>{
			state.status='loading';
			state.error=false;
		}
			)
		.addCase(fetchProductById.fulfilled, (state, action)=>{
			state.status='succeeded';
			state.product=action.payload;
		}
			)
		.addCase(fetchProductById.rejected, (state,action)=>{
			state.status='failed';
			state.error=action.error.message;
		}
			);
	},
});

export default productDetailsSlice.reducer;

























