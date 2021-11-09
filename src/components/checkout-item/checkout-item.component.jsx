import React from 'react';
import './checkout-item.styles.scss'
import { connect } from 'react-redux';
import { removeCartItem, addCartItem, decreaseCartItem } from './../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, removeCartItem, addCartItem, decreaseCartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'></img>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => decreaseCartItem(cartItem)}>&#10094;</div>
                <span className='value'>
                    {quantity}
                </span>
                <div onClick={() => addCartItem(cartItem)} className='arrow'>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div onClick={() => removeCartItem(cartItem)} className='remove-button'>&#10005;</div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    removeCartItem: item => dispatch(removeCartItem(item)),
    addCartItem: item => dispatch(addCartItem(item)),
    decreaseCartItem: item => dispatch(decreaseCartItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);