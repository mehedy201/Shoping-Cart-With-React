import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let totalPrice = 0;
    let shipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((totalPrice * 10 / 100).toFixed(2));
    const totalAmount = totalPrice + shipping + tax;

    return (
        <div className='cart__area'>
            <h5 className='text-center'>Order summary</h5>
                <p>Slected item: {cart.length}</p>
                <p>Price: ${totalPrice}</p>
                <p>Shipping: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5>Total: ${totalAmount}</h5>
        </div>
    );
};

export default Cart;