import { addItemToCart, removeItemFromCart,removeItemFromCartCheckOut,addItemFromCartCheckOut } from "./cart.utils";
const INITIAL_STATE = {
  hidden: true,
  cartItem: [],
  loaded: false,
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
        cartItem: removeItemFromCart(state.cartItem, action.payload),
      };
      case "REMOVE_ITEM_CHECKOUT":
        return {
          ...state,
          cartItem: removeItemFromCartCheckOut(state.cartItem, action.payload),
        };
        case "ADD_ITEM_CHECKOUT":
          return {
            ...state,
            cartItem: addItemFromCartCheckOut(state.cartItem, action.payload),
          };
    case "PLACEHOLDER":
      return {
        ...state,
        loaded: true,
      };
    default:
      return state;
  }
};

export default cartReducer;
