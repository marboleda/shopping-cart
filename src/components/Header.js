import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const header = (props) => {
    const { numInCart } = props;

    return(
        <div className="header">
            <h1>Health is Wealth</h1>
            <h2>Nutritious & Delicious Food for Weight Loss</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
            </nav>
            <span className="numOfItems">{numInCart}</span>
        </div>
    )
}

export default header;