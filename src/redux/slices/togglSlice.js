import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    showCreateCategory: true,
    showCreateProduct: true,
    showCreateVente: true,
  },
  reducers: {
    toogleCreateCategory(state) {
      state.showCreateCategory = !state.showCreateCategory;
    },
    toogleCreateProduct(state) {
      state.showCreateProduct = !state.showCreateProduct;
    },
    toogleCreateVente(state) {
      state.showCreateVente = !state.showCreateVente;
    },
  },
});

export const toggleActions = toggleSlice.actions
export const toggleReducre = toggleSlice.reducer

