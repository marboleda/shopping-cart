import React from 'react';
import './ItemCard.css';

const itemCard = (props) => {
    const { itemId, itemImage, itemDesc, addItems } = props;

    return (
        <div className="item">
            <img src={itemImage}></img>
            <h3>{itemDesc}</h3>
        </div>
    )
}

export default itemCard;