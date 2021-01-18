import React from 'react';
import CSS_Classes from "./ShopItem.module.css";

function ShopItem(props) {
    return (
        <div className={CSS_Classes.shopItem}>
            <img src={props.src} alt='Изображение не загрузилось'/><br/>
            <div className={CSS_Classes.title}><b className={CSS_Classes.b}>{props.title}</b></div><br/>
            <p className={CSS_Classes.desc}>описание: {props.desc}<br/>
                {props.price} рублей</p>
        </div>
    );
}
export default ShopItem;