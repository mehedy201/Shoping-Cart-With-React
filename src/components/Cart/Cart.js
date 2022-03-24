import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart__area'>
            <h5 className='text-center'>Order summary</h5>
                <p>Slected item: {cart.length}</p>
        </div>
    );
};

export default Cart;