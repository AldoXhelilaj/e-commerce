import { addItemToCart,removeItemFromCart } from "./cart.utils";
const INITIAL_STATE = {
  hidden: true,
  cartItem: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return {
        ...state,
        hidden: !state.hidden,
      };

    case "ADD_ITEM":
      return {
        ...state,

        cartItem: addItemToCart(state.cartItem, action.payload),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItem:removeItemFromCart(state.cartItem,action.payload)
      };

    default:
      return state;
  }
};

export default cartReducer;
