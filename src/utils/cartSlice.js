import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Reducer functions - has two parameters (state and action)
    addItem: (state, action) => {
      state.items.push(action.payload); // Older Redux used to yell to not MUTATE the state
      console.log('Curernt State', current(state)); // To get the current state
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; // emptying array []
    },
  },
});



// Exporting actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Exporting reducer
export default cartSlice.reducer;
