import { createSlice } from "@reduxjs/toolkit";

const productlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: null,
    loading: false,
    error: null,
    deleteMessage: null,
    showTable: true,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload.sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
    },
    setProduct(state, action) {
      state.product = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setDeleteMessage(state, action) {
      state.deleteMessage = action.payload;
    },
    addProduct(state, action) {
      state.products = [ action.payload,...state.products].sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
    },
    removeProduct(state, action) {
      state.products = state.products
        .filter((b) => b.id !== action.payload)
        .sort((a, b) => {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
    },
    updateProduct(state, action) {
      state.products = state.products?.map((b) =>
        b.id === action.payload.id ? action.payload : b
      ).sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
    }
  },
});

const productActions = productlice.actions;
const productReducer = productlice.reducer;

export { productActions, productReducer };
