import React from 'react';
import CartItems from "./CartItems/CartItems";
// import CSS from './cart.module.css'

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
        <div>
            {items}
        </div>
    );
}

export default Cart;