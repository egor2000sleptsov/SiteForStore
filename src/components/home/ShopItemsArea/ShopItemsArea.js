import React from 'react';
import CSS_Classes from "./ShopItemsArea.module.css";
import ShopItem from "./ShopItem/ShopItem";

function ShopItemsArea() {
    return (
        <div className={CSS_Classes.shopItemsArea}>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
        </div>
    );
}
export default ShopItemsArea;