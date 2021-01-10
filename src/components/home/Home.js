import React from 'react';
import Carousel from "./Carousel/Carousel";
import CSS_Classes from "./home.modules.css";
import LeftColumn from "./LeftColumn/LeftColumn";
import ShopItemsArea from "./ShopItemsArea/ShopItemsArea";

function Home(props) {
    let sortEl = React.createRef()

    const onSortChange = event => {
        props.sortChange(sortEl)
    }
    return (
        <div className={CSS_Classes.home}>
            <Carousel/>
            <div>
                <select name="" onChange={event => onSortChange(event)} ref={sortEl} value={props.sortValue}>
                    <option>Сначало Дешевые</option>
                    <option>Сначало Дорогие</option>
                    <option>---</option>
                </select>
            </div>
            <LeftColumn/>
            <ShopItemsArea/>
        </div>
);
}
export default Home;