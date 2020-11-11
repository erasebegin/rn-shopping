import PRODUCTS from "../../data/data";
import { ADD_TO_CART } from "../actions/productActions";

const initialState = {
  products: PRODUCTS,
  cartList: [],
  favoriteProducts: [],
};

export default function productReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product
  }
}
