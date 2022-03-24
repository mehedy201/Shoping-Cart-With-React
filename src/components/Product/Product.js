import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, clickAddToCartButton} = props;
    const {img, name, seller, ratings, price} = product;

    return (
            <div className='product__card'>
                <img src={img} alt="" />
                <div className="product_info px-2 pt-2">
                    <h6>{name}</h6>
                    <p>Brand: {seller}</p>
                    <div className='d-flex justify-content-between'>
                        <p>Ratting: {ratings}</p>
                        <p>${price}</p>
                    </div>
                    <button onClick={() => clickAddToCartButton(product)}>Add to Cart</button>
                </div>
            </div>
    );
};

export default Product;