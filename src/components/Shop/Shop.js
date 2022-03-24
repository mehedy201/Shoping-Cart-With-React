import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);
    useEffect( () => {
        fetch('product.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[]);

    const clickAddToCartButton = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="product__and__cart">
            <div className="product__container">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product} 
                        clickAddToCartButton={clickAddToCartButton}>
                        </Product>)
                }
            </div>
            <div className="cart__container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;