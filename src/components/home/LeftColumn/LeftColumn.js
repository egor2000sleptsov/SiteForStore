import React from 'react';
import CSS_Classes from "./LeftColumn.modules.css";
import Price from "./Price/Price";
import Categorys from "./Categorys/Categorys";

function LeftColumn() {
    return (
        <div className={CSS_Classes.leftColumn}>
            <Price/>
            <Categorys/>
        </div>
    );
}
export default LeftColumn;