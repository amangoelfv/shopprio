import { cartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addCartItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const removeCartItem = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})

export const decreaseCartItem = item => ({
    type: cartActionTypes.DECREASE_ITEM,
    payload: item
})