export const addItemsToCart = (cartItems, newItem) => {
    const existingCartItem = cartItems.find(i => i.id === newItem.id);
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === newItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    return [...cartItems, { ...newItem, quantity: 1 }];

}

export const decreaseCartItems = (cartItems, newItem) => {
    const existingCartItem = cartItems.find(i => i.id === newItem.id);
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(i=> i.id !== newItem.id);
    }
    return cartItems.map((cartItem) => cartItem.id === newItem.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}