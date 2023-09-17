import { createSlice } from "@reduxjs/toolkit";

const Permisssion = createSlice({
  name: "isadminuser",
  initialState: false,
  reducers: {
    roless(state, action) {
      return (state = action.payload);
    },
  },
});

export default Permisssion.reducer;

export const { roless } = Permisssion.actions;

// const Authslice = createSlice({
//   name: "logslice",
//   initialState: true,
//   reducers: {
//     loginlout(state, action) {
//       return (state = !state);
//     },
//   },
// });

// export default Authslice.reducer;

// export const { loginlout } = Authslice.actions;
