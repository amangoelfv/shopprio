export const addItemsToCart = (cartItems, newItem) => {
    const existingCartItem = cartItems.find(i => i.id === newItem.id);
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === newItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    return [...cartItems, { ...newItem, quantity: 0 }];

}