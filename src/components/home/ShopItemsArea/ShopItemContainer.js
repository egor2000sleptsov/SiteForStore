import React from 'react';
import {connect} from "react-redux";
import ShopItemsArea from "./ShopItemsArea";

let mapStateToProps = (state) => {
    return {
        items: state.home.items
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onchange: () => {
            alert('clicked')
        }
    }
}
const ShopItemContainer = connect(mapStateToProps, mapDispatchToProps)(ShopItemsArea)

export default ShopItemContainer;