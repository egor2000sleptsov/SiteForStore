import React from 'react';
import CSS_Classes from "./ShopItemsArea.module.css";
import ShopItem from "./ShopItem/ShopItem";

function ShopItemsArea(props) {
    let items = props.items
    let temp = []
    if (props.searchResult !== "") {
        // eslint-disable-next-line array-callback-return
        temp = items.filter(el => {
            if (el.desc.toLowerCase().indexOf(props.searchResult) !== -1 || el.title.toLowerCase().indexOf(props.searchResult) !== -1) {
                return el
            }
        })
        items = temp
    }
    let filterOn = props.filterOn
    let filter = props.filter
    temp = []
    for (let filterKey in filter) {
        if (filter[filterKey] === true) {
            items.forEach((el) => {
                if (el.type === filterKey)
                    temp.push(el)
            })
        }
    }
    if (filterOn)
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
            desc={el.desc.toLowerCase()}
            price={el.price}
            key={items.indexOf(el)}
        />
    ))

    return (
        <div className={CSS_Classes.shopItemsArea}>
<<<<<<< master
            {items}
=======
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
>>>>>>> shop area and items changes
        </div>
    );
}

export default ShopItemsArea;