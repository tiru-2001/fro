import { createSlice } from "@reduxjs/toolkit";

const Authslice = createSlice({
  name: "logslice",
  initialState: true,
  reducers: {
    loginlout(state, action) {
      return (state = !state);
    },
  },
});

export default Authslice.reducer;

export const { loginlout } = Authslice.actions;
