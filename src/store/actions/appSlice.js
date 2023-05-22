import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: require("../../data/phone.json"),
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      return {
        ...state,
        products: [action.payload,...state.products ],
      };
    },

    editProduct: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id.toString() === action.payload.id.toString()) {
          product = action.payload.product;
          return product;
        }
        return product;
      });
    },

    deleteProduct: (state, action) => {
      const products = state.products.filter((x) => {
        if (x.id.toString() !== action.payload.id.toString()) {
          return x;
        }
      });
      return {
        ...state,
        products: products,
      };
    },
  },
});
export const { addProduct, editProduct, deleteProduct } = appSlice.actions;

export default appSlice.reducer;
