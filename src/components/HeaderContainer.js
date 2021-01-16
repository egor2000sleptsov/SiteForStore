import {onSearchButtonClickActionCreator, onSearchValueChangeActionCreator} from "../redux/HeaderReducer";
import {connect} from "react-redux";
import Header from "./Header";


let mapStateToProps = (state) => ({
    searchValue: state.header.searchValue
})

let mapDispatchToProps = (dispatch) => ({
    onButtonClick: () => {
        dispatch(onSearchButtonClickActionCreator())
    },
    onSearchValueChange: (value) => {
        dispatch(onSearchValueChangeActionCreator(value))
    }
})

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer;
