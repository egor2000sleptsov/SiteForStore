import React from 'react';
import CSS_Classes from "./ShopItemsArea.module.css";
import ShopItem from "./ShopItem/ShopItem";

function ShopItemsArea(props) {
    let items = props.items

    let filter = props.filter
    let temp = []
    for (let filterKey in filter) {
        if (filter[filterKey] === true) {
            items.forEach((el) => {
                if (el.type === filterKey)
                    temp.push(el)
            })
        }
    }
    if (temp.length !== 0)
        items = temp


    if (props.sortValue === 'Сначала дешевые')
        items.sort((prev, next) => prev.price - next.price)
    else if (props.sortValue === 'Сначала дорогие')
        items.sort((prev, next) => prev.price - next.price).reverse()
    else if (props.sortValue === '---')
        items.sort(() => Math.random() - 0.5)
    items = items.map(el => (
        <ShopItem
            src={el.src}
            title={el.title}
            desc={el.desc}
            price={el.price}
            key={items.indexOf(el)}
        />
    ))

    return (
        <div className={CSS_Classes.shopItemsArea}>
            {items}
        </div>
    );
}

export default ShopItemsArea;