import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {CategoryData} from '../interfaces/Category';
import {ID} from '../interfaces/ID';

interface CategoryState {
  categories: CategoryData[];
}
const inititalCategory: CategoryState = {
  categories: [],
};

const categorySlice = createSlice({
  initialState: inititalCategory,
  name: 'categories',
  reducers: {
    setCategories: (state, action: PayloadAction<CategoryData[]>) => {
      state.categories = action.payload;
    },
    addCategory: (state, action: PayloadAction<CategoryData>) => {
      state.categories.unshift(action.payload);
    },
    updateCategory: (state, action: PayloadAction<CategoryData>) => {
      const updatedIndex = state.categories.findIndex(
        item => item.id === action.payload.id,
      );
      state.categories.splice(updatedIndex, 1, action.payload);
    },
    deleteCategory: (state, action: PayloadAction<ID>) => {
      const deletedIndex = state.categories.findIndex(
        item => item.id === action.payload.id,
      );
      state.categories.splice(deletedIndex, 1);
    },
  },
});

export default categorySlice.reducer;
export const {setCategories, addCategory, updateCategory, deleteCategory} =
  categorySlice.actions;
