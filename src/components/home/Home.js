import React from 'react';
import Carousel from "./Carousel/Carousel";
import CSS_Classes from "./home.module.css";
import LeftColumn from "./LeftColumn/LeftColumn";
import ShopItemsArea from "./ShopItemsArea/ShopItemsArea";
import ShopItemContainer from "./ShopItemsArea/ShopItemContainer";

function Home(props) {
    return (
        <div className={CSS_Classes.home}>
            <Carousel/>
            <LeftColumn sortChange={props.sortChange} sortValue={props.sortValue} filter={props.filter} filterChange={props.filterChange}/>
            <ShopItemContainer/>
        </div>
);
}
export default Home;