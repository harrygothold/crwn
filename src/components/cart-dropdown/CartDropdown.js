import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/CartItem';
import {selectCartItems} from '../../redux/cart/cart.selectors';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length > 0 ? 
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                : <h1 className='empty'>Cart is empty</h1>
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);