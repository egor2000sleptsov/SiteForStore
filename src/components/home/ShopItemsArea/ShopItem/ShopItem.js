import React from 'react';
import CSS_Classes from "./ShopItem.module.css";

function ShopItem(props) {
    return (
        <div className={CSS_Classes.shopItem}>
            <img src={props.src} alt='Изображение не загрузилось'/>
            <b>{props.title}</b><br/>
            описание: {props.desc}<br/>
            {props.price} рублей
        </div>
    );
}
export default ShopItem;