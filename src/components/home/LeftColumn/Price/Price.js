import React from 'react';
import CSS_Classes from "./Price.module.css";

function Price(props) {
    let sortEl = React.createRef()

    const onSortChange = event => {
        props.sortChange(sortEl)
    }
    return (
        <div className={CSS_Classes.price}>
            <div>
                <select name="" onChange={event => onSortChange(event)} ref={sortEl} value={props.sortValue}>
                    <option>Сначало Дешевые</option>
                    <option>Сначало Дорогие</option>
                    <option>---</option>
                </select>
            </div>
        </div>
    );
}
export default Price;