import React from 'react';
import {Button} from "react-bootstrap";
import CSS from './CartItems.module.css'

function CartItems(props) {
    return (
        <div className={CSS.item}>
            <div className={CSS.card}>
                <div className={CSS.imgblock}>
                    <div>
                        <img src={props.src} alt="Не удалось загрузить изображение" className={CSS.img}/>
                    </div>
                    <div>
                        <h3>{props.title}</h3>
                    </div>
                </div>
                <div style={{display: "flex", marginLeft: 18,justifyContent:"space-between"}}>
                    <div className={CSS.block}>
                        <Button type='primary'>-</Button>
                        <input type="text" value={props.count} disabled/>
                        <Button type='primary'>+</Button>

                    </div>
                    <div style={{display: "flex", alignItems: "center", margin: 10,justifyContent:"space-between"}} >
                        <h3>Итого</h3>
                        <h2 style={{}}>{props.count * props.price}р.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;