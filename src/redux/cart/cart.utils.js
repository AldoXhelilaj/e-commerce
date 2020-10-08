export const addItemToCart = (cartItems, cartItemsToAdd) => {
    const existingItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemsToAdd.id
        );
        
        if (existingItem) {
            console.log(existingItem)
            return cartItems.map((cartItem) =>
            cartItem.id === cartItemsToAdd.id ? {
                ...cartItem,
                quantity: cartItem.quantity + 1
            } : cartItem);
    }

    return [...cartItems,{...cartItemsToAdd,quantity:1}]


}


export const removeItemFromCart = (cartItems, cartItemsToAdd) => {
    const existingItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemsToAdd.id
        );
        
        if (existingItem) {
            console.log(existingItem+"REMOVE")
            return cartItems.filter((cartItem) =>
            cartItem.id !== cartItemsToAdd.id )
        }

    return [...cartItems,{...cartItemsToAdd,quantity:1}]


}