import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ProductData} from '../interfaces/Product';
import {ID} from '../interfaces/ID';

interface ProductState {
  products: ProductData[];
}

const initialProduct: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialProduct,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductData[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<ProductData>) => {
      state.products.unshift(action.payload);
    },
    updateProduct: (state, action: PayloadAction<ProductData>) => {
      const updatedIndex = state.products.findIndex(
        item => item.id === action.payload.id,
      );
      state.products.splice(updatedIndex, 1, action.payload);
    },
    deleteProduct: (state, action: PayloadAction<ID>) => {
      const deletedIndex = state.products.findIndex(
        item => item.id === action.payload.id,
      );
      state.products.splice(deletedIndex, 1);
    },
  },
});

export default productSlice.reducer;
export const {addProduct, setProducts, updateProduct, deleteProduct} =
  productSlice.actions;
