import React from 'react';
import './cart-dropdown.styles.scss'

import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from './../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from './../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (

        <div className='cart-dropdown'>
            {
                cartItems.length
                    ?
                    <div className='cart-items'>
                        {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
                    </div>
                    :
                    <span className='empty-message'>Your cart is empty</span>
            }
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));