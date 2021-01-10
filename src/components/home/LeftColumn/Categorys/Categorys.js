import React from 'react';
import CSS_Classes from "./Categorys.modules.css";

function Categorys() {
    return (
        <div className={CSS_Classes.categorys}>
            <p><input type='checkbox' onChange={event => {console.log(event.target.checked)}}/><label>Сувениры</label></p>
            <p><input type='checkbox' onChange={event => {console.log(event.target.checked)}}/><label>Головный убор</label></p><b/>
            <p><input type='checkbox' onChange={event => {console.log(event.target.checked)}}/><label>Штаны</label></p><b/>
            <p><input type='checkbox' onChange={event => {console.log(event.target.checked)}}/><label>Толстовки</label></p><b/>
        </div>
    );
}
export default Categorys;