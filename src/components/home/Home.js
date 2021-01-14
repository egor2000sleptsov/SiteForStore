import React from 'react';
import Carousel from "./Carousel/Carousel";
import CSS_Classes from "./home.modules.css";
import LeftColumn from "./LeftColumn/LeftColumn";
import ShopItemsArea from "./ShopItemsArea/ShopItemsArea";

function Home(props) {
    return (
        <div className={CSS_Classes.home}>
            <Carousel/>
            <LeftColumn sortChange={props.sortChange} sortValue={props.sortValue} filter={props.filter} filterChange={props.filterChange}/>
            <ShopItemsArea/>
        </div>
);
}
export default Home;