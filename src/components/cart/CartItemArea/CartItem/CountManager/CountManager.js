import React from 'react';
import CSS_Classes from "./CountManager.module.css";
import CartItem from "../CartItem";

function CountManager() {
    return (
        <div className={CSS_Classes.itemCount}>
            <button>-</button>
            <textarea>count</textarea>
            <button>+</button>
        </div>
    );
}
export default CountManager;