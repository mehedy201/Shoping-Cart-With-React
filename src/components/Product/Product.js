import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {img, name, seller, ratings, price} = props.product;
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
                    <button>Add to Cart</button>
                </div>
            </div>
    );
};

export default Product;