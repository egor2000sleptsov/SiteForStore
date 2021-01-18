import React from 'react';
import CSS_Classes from "./CartItemsArea.module.css";
import CartItem from "./CartItem/CartItem";

function CartItemsArea() {
    return (
        <div className={CSS_Classes.cartItemsArea}>
                <CartItem/>
                <CartItem/>
        </div>
    );
}
export default CartItemsArea;