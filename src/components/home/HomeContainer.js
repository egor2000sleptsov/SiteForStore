import React from 'react';
import Home from "./Home";
import {onSortChangeActionCreator} from "../../redux/HomeReducer";

function HomeContainer(props) {
    let state = props.store.getState()
    let sortChange = (value) => {
        let action = onSortChangeActionCreator(value.current.value)
        props.store.dispatch(action)
    }
    return (
        <Home sortChange={(value)=>sortChange(value)} sortValue={state.home.sortValue}/>
);
}
export default HomeContainer;