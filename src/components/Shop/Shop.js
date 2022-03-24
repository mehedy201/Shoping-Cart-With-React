import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('product.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])
    return (
        <div>
            <h1>All product: {products.length}</h1>
        </div>
    );
};

export default Shop;