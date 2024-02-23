import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    showCreateCategory: true,
    showCreateProduct: true,
  },
  reducers: {
    toogleCreateCategory(state) {
      state.showCreateCategory = !state.showCreateCategory;
    },
    toogleCreateProduct(state) {
      state.showCreateProduct = !state.showCreateProduct;
    },
  },
});

export const toggleActions = toggleSlice.actions
export const toggleReducre = toggleSlice.reducer

