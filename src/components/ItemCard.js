import React, { useState } from 'react';
import './ItemCard.css';

const ItemCard = (props) => {
    const [numOfItem, setNumOfItem] = useState(0);

    const { itemId, itemImage, itemDesc, addItems } = props;

    const updateNumOfItem = (newNum) => {
        setNumOfItem(newNum);
    }

    return (
        <div className="item">
            <img src={itemImage}></img>
            <h3>{itemDesc}</h3>
            <input 
                type="number" 
                className='num-of-items'
                value={numOfItem}
                onChange={(e) => updateNumOfItem(Number(e.target.value))}/>
        </div>
    )
}

export default ItemCard;