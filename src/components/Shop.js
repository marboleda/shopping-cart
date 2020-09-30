import React from 'react';
import ItemCard from './ItemCard'
import './Shop.css'
import Salad from '../images/chicken-and-ptitim-salad.png'
import Puree from '../images/eggplant-and-potato-puree.png'
import Rice from '../images/sweet-chili-salmon-and-brown-rice.png'
import Spaghetti from '../images/tomato-whole-wheat-spaghetti.png'

const shop = (props) => {
    const { addItems } = props;

    const menuItems = [{
                            id: 'salad',
                            image: Salad,
                            description: 'Chicken and Ptitim Salad'
                        },
                       {
                           id: 'puree',
                           image: Puree,
                           description: 'Eggplant and Potato Puree'
                       },
                       {
                           id: 'rice',
                           image: Rice,
                           description: 'Sweet Chili Salmon and Brown Rice'
                       },
                       {
                           id: 'spaghetti',
                           image: Spaghetti,
                           description: 'Tomato Whole Wheat Spaghetti'
                       }];

    return (
        <div>
            <div id="items">
                {menuItems.map((item) => {
                    return <ItemCard 
                                itemId={item.id}
                                itemImage={item.image}
                                itemDesc = {item.description} 
                                addItems = {addItems}
                            />
                })}
            </div>
        </div>
    );
};

export default shop;