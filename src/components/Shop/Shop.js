import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('product.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])
    return (
        <div className="product__and__cart">
            <div className="product__container">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart__container">
                <h5 className='text-center'>Order summary</h5>
            </div>
        </div>
    );
};

export default Shop;