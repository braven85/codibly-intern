import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'Filter',
  initialState: {
    filter: 0,
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
