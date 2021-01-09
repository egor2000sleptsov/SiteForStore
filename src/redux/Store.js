import firebase from "../Firebase.js";
import headerReducer from "./HeaderReducer";
import homeReducer from "./HomeReducer";
import cartReducer from "./CartReducer";


let store = {
    _state: {
        header: {
            searchValue: ''
        },
        home: {
            sortValue: '---'
        },
        cart: {
            array: [1, 2, 3]
        },
    },
    _callSubscrider() {
        console.log('hey')
    },
    getState() {
        return this._state
    },
    changeSearchValue(newValue) {
        this._state.header.searchValue = newValue
        this._callSubscrider(this._state)
    },
    subscride(observer) {
        this._callSubscrider = observer
    },
    dispatch(action) {
        this._state.header =headerReducer(this._state.header,action)
        this._state.home =homeReducer(this._state.home,action)
        this._state.cart =cartReducer(this._state.cart,action)
        this._callSubscrider(this._state)
    }
}

window.store = store
export default store