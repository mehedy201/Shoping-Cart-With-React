import React from 'react';
import logo from '../image/Mehedi_Hasan.png'
import './Header.css'

const Header = () => {
    return (
        <div className="container">
            <nav>
                <img src={logo} alt="" />
                <div>
                    <a href="/home">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>  
        </div>
    );
};

export default Header;