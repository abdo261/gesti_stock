import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categorys: [],
    category: null,
    loading: false,
    error: null,
    deleteMessage: null,
  },
  reducers: {
    setCategorys(state, action) {
      state.categorys = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setdeleteMessage(state, action) {
      state.deleteMessage = action.payload;
    },
    addCategory(state, action) {
      state.categorys = [action.payload,...state.categorys].sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
    },
    removeCategory(state, action) {
      state.categorys = state.categorys
        .filter((c) => c.id !== action.payload)
        .sort((a, b) => {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
    },
    updateCategory(state, action) {
      state.categorys = state.categorys
        ?.map((c) => (c.id === action.payload.id ? action.payload : c))
        .sort((a, b) => {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
    }
  },
});
const categoryActions = categorySlice.actions;
const categoryReducer = categorySlice.reducer;
export { categoryActions, categoryReducer };
