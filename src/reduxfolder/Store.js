import { configureStore } from "@reduxjs/toolkit";
import logslice from "./logslice";
import isadminslice from "./isadminslice";

const store = configureStore({
  reducer: {
    loginlogout: logslice,
    isadminus: isadminslice,
  },
});

export default store;
