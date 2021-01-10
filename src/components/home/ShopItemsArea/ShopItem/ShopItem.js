import React from 'react';
import CSS_Classes from "./ShopItem.css";

function ShopItem() {
    return (
        <div className={CSS_Classes.shopItem}>
            <img src={"https://pics.livejournal.com/matabuba/pic/001rwyzf"} alt={"Изображение товара"}/>
            <div>
                Описание товара
            </div>
        </div>
    );
}
export default ShopItem;