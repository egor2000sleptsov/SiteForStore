import React from 'react';
<<<<<<< master
import CartItems from "./CartItems/CartItems";
import CSS from './cart.module.css'
=======
import CartItemsArea from "./CartItemArea/CartItemsArea";
>>>>>>> cart

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
<<<<<<< master
            {items}
=======
            <CartItemsArea/>
            <div>
                Стоимость всех товаров в корзине
            </div>
            <div>
                <textarea>Телефон</textarea>
                <textarea>Имя</textarea>
            </div>
>>>>>>> cart
        </div>
    );
}

export default Cart;