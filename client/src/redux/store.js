import { configureStore } from "@reduxjs/toolkit";
import { toggleReducre } from "./slices/togglSlice";

const store = configureStore({
  reducer: {
    toggle: toggleReducre,
  },
});
export default store;
