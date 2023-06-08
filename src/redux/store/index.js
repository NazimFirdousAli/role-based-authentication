import { configureStore } from '@reduxjs/toolkit';
import roleSlice from '../slice';

const store = configureStore({
  reducer: {
    userRole: roleSlice,
  },
});

export { store };
