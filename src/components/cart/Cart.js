import React from 'react';
import CartItems from "./CartItems/CartItems";
import CSS from './cart.module.css'
import {Button} from "react-bootstrap";

function Cart(props) {
    let items = props.items
    items = items.map(el => (
        <CartItems
            title={el.title}
            price={el.price}
            count={el.count}
            src={el.src}
            key={items.indexOf(el)}
        />))
    return (
        <div className={CSS.cart}>
            {items}
            <div>
                <Button>оформить заказ</Button>
            </div>
        </div>
    );
}

export default Cart;