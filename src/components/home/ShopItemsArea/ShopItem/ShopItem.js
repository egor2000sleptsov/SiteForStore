import React from 'react';
import CSS_Classes from "./ShopItem.module.css";

function ShopItem(props) {
    let items = props.items
    return (
        <div className={CSS_Classes.shopItem}>
            <img src={props.src}/>
            <b>{props.title}</b>
            стоимость: {props.price}
            описание: {props.desc}
        </div>
    );
}
export default ShopItem;