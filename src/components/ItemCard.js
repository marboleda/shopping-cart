import React from 'react';

const itemCard = (props) => {
    const { itemId, itemImage, itemDesc } = props;

    return (
        <div className="item">
            <img src={itemImage}></img>
            <h3>{itemDesc}</h3>
        </div>
    )
}

export default itemCard;