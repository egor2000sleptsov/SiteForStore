import React from 'react';
import Home from "./Home";
import {onFilterChangeActionCreator, onSortChangeActionCreator} from "../../redux/HomeReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        sortValue: state.home.sortValue,
        filter: state.home.filter
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sortChange: (value) => {
            dispatch(onSortChangeActionCreator(value.current.value))
        },
        filterChange: (value) => {
            dispatch(onFilterChangeActionCreator(value))
        }
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer;