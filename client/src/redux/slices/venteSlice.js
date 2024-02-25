import { createSlice } from "@reduxjs/toolkit";

const venteSlice = createSlice({
  name: "vente",
  initialState: {
    ventes: [],
    vente: null,
    loading: false,
    error: null,
    deleteMessage: null,
  },
  reducers: {
    setVentes(state, action) {
      state.ventes = action.payload?.sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
    },
    setVente(state, action) {
      state.vente = action.payload;
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
    addVente(state, action) {
      state.ventes = [ action.payload, ...state.ventes].sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
    },
    removeVente(state, action) {
      state.ventes = state.ventes
        .filter((b) => b.id !== action.payload)
        .sort((a, b) => {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
    },
    updateVente(state, action) {
      state.ventes = state.ventes
        ?.map((b) => (b.id === action.payload.id ? action.payload : b))
        .sort((a, b) => {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
    },
  },
});

const venteActions = venteSlice.actions;
const venteReducer = venteSlice.reducer;

export { venteActions, venteReducer };
