import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  pizza: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action) {
      state.pizza.push(action.payload);
      state.totalPrice = state.pizza.reduce((sum, obj) => sum + obj.price, 0);
    },
    removePizza(state) {
      state.pizza = [];
      state.totalPrice = state.pizza.reduce((sum, obj) => sum + obj.price, 0);
    },
    deletedPizza(state, action) {
      state.pizza = state.pizza.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.pizza.reduce((sum, obj) => sum + obj.price, 0);
    },
  },
});

export const { addPizza, removePizza, deletedPizza } =
  cartSlice.actions;
export default cartSlice.reducer;
