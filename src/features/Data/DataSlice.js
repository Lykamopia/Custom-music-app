import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addItemSuccess: (state, action) => {
      state.items.unshift(action.payload);
    },
    addItemFail: (state, action) => {
      state.error = action.payload;
    },
    removeItemSuccess: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeItemFail: (state, action) => {
      state.error = action.payload;
    },
    updateItemSuccess: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    updateItemFail: (state, action) => {
      state.error = action.payload;
    },
    getMusicFetch: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getMusicSuccess: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    getMusicFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addItemSuccess,
  addItemFail,
  removeItemSuccess,
  removeItemFail,
  updateItemSuccess,
  updateItemFail,
  getMusicFetch,
  getMusicSuccess,
  getMusicFail,
} = DataSlice.actions;

export default DataSlice.reducer;
