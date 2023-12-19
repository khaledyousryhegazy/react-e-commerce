import { createSlice } from "@reduxjs/toolkit";
import SweetAlert from "../../components/SweetAlert";

const getInitialState = () => {
  const wishStorage = localStorage.getItem("wishlist");
  return wishStorage ? JSON.parse(wishStorage) : [];
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: getInitialState(),
  reducers: {
    addWishlist: (state, action) => {
      const productId = action.payload.id;

      const findProduct = state.find((product) => product.id === productId);

      if (findProduct) {
        findProduct.productQuantity += 1;
      } else {
        const productClone = { ...action.payload, productQuantity: 1 };
        state.push(productClone);
      }

      localStorage.setItem("wishlist", JSON.stringify(state));

      SweetAlert("success", "Added to wishlist");
    },
    removeWishlist: (state, action) => {
      const productId = action.payload.id;

      const index = state.findIndex((product) => {
        return productId === product.id;
      });

      if (index !== -1) {
        state.splice(index, 1);
      }

      localStorage.setItem("wishlist", JSON.stringify(state));
      SweetAlert("success", "Removed from wishlist");
    },
  },
});

export const { addWishlist, removeWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
