import React from 'react';
import CSS_Classes from "./ShopItemsArea.module.css";
import ShopItem from "./ShopItem/ShopItem";

function ShopItemsArea(props) {
    let items = props.items
    if (props.sortValue === 'Сначало Дешевые')
        items.sort((prev, next) => prev.price - next.price)
    else if (props.sortValue === 'Сначало Дорогие')
        items.sort((prev, next) => prev.price - next.price).reverse()
    else if (props.sortValue === '---')
        items.sort(() => Math.random() - 0.5)
    items = items.map(el => (
        <ShopItem
            src={el.src}
            title={el.title}
            desc={el.desc}
            price={el.price}/>
    ))
    //TODO
    return (
        <div className={CSS_Classes.shopItemsArea}>
            {items}
        </div>
    );
}

export default ShopItemsArea;