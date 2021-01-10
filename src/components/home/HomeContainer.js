import React from 'react';
import Home from "./Home";
import {onSortChangeActionCreator} from "../../redux/HomeReducer";
import StoreContext from "../../StoreContext";

function HomeContainer(props) {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let sortChange = (value) => {
                    let action = onSortChangeActionCreator(value.current.value)
                    store.dispatch(action)
                }
                let state = store.getState()
                return <Home sortChange={(value) => sortChange(value)} sortValue={state.home.sortValue}/>
            }
            }</StoreContext.Consumer>
    );
}

export default HomeContainer;