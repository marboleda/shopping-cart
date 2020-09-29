import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return(
        <div className="header">
            <h1>Health is Wealth</h1>
            <h2>Nutritious & Delicious Food for Weight Loss</h2>
            <nav>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                </ul>
            </nav>
        </div>
    )
}

export default header;