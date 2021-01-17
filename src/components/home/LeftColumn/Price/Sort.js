import React from 'react';
import CSS_Classes from "./Sort.module.css";

function Sort(props) {
    let sortEl = React.createRef()

    const onSortChange = event => {
        props.sortChange(sortEl)
    }
    return (
        <div className={CSS_Classes.price}>
            <div>
                <select onChange={event => onSortChange(event)} ref={sortEl} value={props.sortValue} className={CSS_Classes.price}>
                    <option>Сначала дешевые</option>
                    <option>Сначала дорогие</option>
                    <option>---</option>
                </select>
            </div>
        </div>
    );
}
export default Sort;