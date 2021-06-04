import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Women's Blouse",
    newPrice: 16.00,
    oldPrice: 20.00,
    imageUrl:"/img-2.jpg",
  },
  {
    id: 2,
    name: "Men's Plain Tshirt",
    newPrice: 5.00,
    oldPrice: 10.00,
    imageUrl:"/img-4.jpg",
  },
];

const itemSlice = createSlice({
  name: "Item",
  initialState: initialState,
  reducers: {
    addToCard(state) {
      console.log("Item added");
    },
  },
});

const initialCartState = { items: [], totalQuantity: 0, totalAmount: 0 }

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    add(state, action) {
    },
    replaceCart(state, action){
      state.totalQuantity = action.payload.totalQuantity
      state.totalAmount = action.payload.totalAmount
      state.items = action.payload.items
    }
  },
})

export const cartActions = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export const itemActions = itemSlice.actions;

export default itemSlice.reducer;
