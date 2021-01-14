import React from 'react';
import CSS_Classes from "./LeftColumn.modules.css";
import Price from "./Price/Price";
import Categorys from "./Categorys/Categorys";

function LeftColumn(props) {
    return (
        <div className={CSS_Classes.leftColumn}>
            <Price sortChange={props.sortChange} sortValue={props.sortValue}/>
            <Categorys filter={props.filter} filterChange={props.filterChange}/>
        </div>
    );
}
export default LeftColumn;