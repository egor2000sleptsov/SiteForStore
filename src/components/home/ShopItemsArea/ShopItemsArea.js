import React from 'react';
import CSS_Classes from "./ShopItemsArea.module.css";
import ShopItem from "./ShopItem/ShopItem";

function ShopItemsArea(props) {
    let items = props.items.map(el => (<ShopItem src={el.src} title={el.title} desc={el.desc} price={el.price}/>))
    return (
        <div className={CSS_Classes.shopItemsArea}>
            {items}
        </div>
    );
}
export default ShopItemsArea;