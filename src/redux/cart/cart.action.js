export const toggleCart = () => ({
  type: "TOGGLE_CART",
});
export const imagePlaceholder = () => ({
  type: "PLACEHOLDER",
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});


export const removeItemCheckout = (item) => ({
  type: "REMOVE_ITEM_CHECKOUT",
  payload: item,
});

export const addItemCheckout = (item) => ({
  type: "ADD_ITEM_CHECKOUT",
  payload: item,
});
