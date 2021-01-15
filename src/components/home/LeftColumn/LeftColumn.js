import React from 'react';
import CSS_Classes from "./LeftColumn.module.css";
import Sort from "./Price/Sort";
import Filter from "./Categorys/Filter";

function LeftColumn(props) {
    return (
        <div className={CSS_Classes.leftColumn}>
            <Sort sortChange={props.sortChange} sortValue={props.sortValue}/>
            <Filter filter={props.filter} filterChange={props.filterChange}/>
        </div>
    );
}
export default LeftColumn;