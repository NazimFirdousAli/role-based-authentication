import { createSlice } from '@reduxjs/toolkit';
// utils

const initialState = {
  role: [],
};

const roleSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    roleSet(state, action) {
      console.log(state, action, 'state,actionstate,action');
      state.role = action.payload;
    },
  },
});
// Reducer
export default roleSlice.reducer;

// Actions
export const { roleSet } = roleSlice.actions;

// ----------------------------------------------------------------------
