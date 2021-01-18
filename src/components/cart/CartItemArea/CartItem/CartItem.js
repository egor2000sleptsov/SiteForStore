import React from 'react';
import CSS_Classes from "./CartItem.module.css";
import CountManager from "./CountManager/CountManager";

function CartItem() {
    return (
        <div className={CSS_Classes.cartItem}>
            <img src={"https://economic-definition.com/Preview_Figures/150/080/1099254284-_d0_9a_d0_b0_d0_ba_20_d0_bf_d1_80_d0_b0_d0_b2_d0_b8_d0_bb_d0_be_2c_20_d1_82_d0_be_20_d1_87_d1_82_d0_be_20_d0_bf_d1_80_d0_be_d0_b8_d0_b7_d0_b2_d0_be_d0_b4_d0_b8_d1_82_d1_8c_d1_81_d1_8f_20_d0_bf_d0_be_d1_81_d1_80_d0_b5_d0_b4_d1_81_d1_82_d0_b2.jpg"} alt={"Изображение товара"}/>
            <div className={CSS_Classes.itemDesc}>
                <h2>Название товара</h2>
                Описание товара
                Описание товара
                Описание товараОписание товара
                Описание товараОписание товараОписание товараОписание товараОписание товара
                Описание товараОписание товараОписание товара
                Описание товара

            </div>
            <div className={CSS_Classes.itemPrice}>
                Стоимость
            </div>
            <CountManager/>
            <div className={CSS_Classes.itemSumPrice}>
                Итоговая стоимость
            </div>
            <button>Удали меня</button>
        </div>
    );
}
export default CartItem;