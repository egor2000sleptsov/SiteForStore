import React from 'react';
import {Button} from "react-bootstrap";
import CSS from './CartItems.module.css'

function CartItems(props) {
    return (
        <div>
            <img src={props.src} alt="Не удалось загрузить изображение" className={CSS.img}/>
            {props.title}
            <Button type='primary'>-</Button>
            <input type="text" value={props.count} disabled/>
            <Button type='primary'>+</Button>
            <h3>Итого</h3>
            {props.count*props.price}
        </div>
    );
}

export default CartItems;