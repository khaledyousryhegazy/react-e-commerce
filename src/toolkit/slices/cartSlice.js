import { createSlice } from "@reduxjs/toolkit";
import SweetAlert from "../../components/SweetAlert";

const getinitialState = () => {
  const cartStorage = localStorage.getItem("cart");
  return cartStorage ? JSON.parse(cartStorage) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getinitialState(),
  reducers: {
    addCart: (state, action) => {
      const productId = action.payload.id;
      const findProduct = state.find((product) => product.id === productId);

      if (findProduct) {
        findProduct.productQuantity += 1;
      } else {
        const productClone = { ...action.payload, productQuantity: 1 };
        state.push(productClone);
      }

      localStorage.setItem("cart", JSON.stringify(state));
      // sweet alert Done
      SweetAlert("success", "Added to cart");
    },

    removeCart: (state, action) => {
      const productId = action.payload.id;

      const index = state.findIndex((product) => product.id === productId);

      if (index !== -1) {
        state.splice(index, 1);
      }

      localStorage.setItem("cart", JSON.stringify(state));

      SweetAlert("success", "Removed from cart");
    },

    decrease: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );

      if (state[index].productQuantity > 1) {
        state[index].productQuantity -= 1;
      } else {
        return;
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    clear: () => {
      const emptyArr = [];
      // sweet alert are you sure

      localStorage.setItem("cart", JSON.stringify(emptyArr));
      SweetAlert("success", "Removed all from cart");
      return emptyArr;
    },
  },
});

export const { addCart, removeCart, decrease, clear } = cartSlice.actions;
export default cartSlice.reducer;
