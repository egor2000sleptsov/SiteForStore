import {combineReducers, createStore} from "redux";
import cartReducer from "./CartReducer";
import homeReducer from "./HomeReducer";
import headerReducer from "./HeaderReducer";

let reducers = combineReducers({
    header: headerReducer,
    home: homeReducer,
    cart: cartReducer
})

let store = createStore(reducers)

export default store