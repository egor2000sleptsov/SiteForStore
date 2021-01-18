import React from 'react';
import CSS_Classes from "./LeftColumn.module.css";
import Sort from "./Sort/Sort";
import Filter from "./Filter/Filter";

function LeftColumn(props) {
    return (
        <div className={CSS_Classes.leftColumn}>
            <div className={CSS_Classes.items}>
                <Sort sortChange={props.sortChange} sortValue={props.sortValue}/>
                <Filter filter={props.filter} filterChange={props.filterChange}/>
            </div>
        </div>
    );
}
export default LeftColumn;