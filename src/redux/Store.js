import firebase from "../Firebase.js";
const searchValue = "changeSearchValue";
let searchButtonValue = 'searchButtonClicked';

let store = {
    _state: {
        header: {
            searchValue: ''
        },
        home:{

        },
        cart:{

        },
    },
    _callSubscrider() {
        console.log('hey')
    },
    getState(){
        return this._state
    },
    changeSearchValue (newValue){
        this._state.header.searchValue = newValue
        this._callSubscrider(this._state)
    },
    subscride(observer)  {
        this._callSubscrider = observer
    },
    dispatch(action){
        if (action.type === searchValue){
            this._state.header.searchValue = action.newValue
            this._callSubscrider(this._state)
        } else if (action.type === searchButtonValue){
            alert('clicked')
        }
    }
}

export const onSearchValueChangeActionCreator = (value) => ({
    type: searchValue,
    newValue: value
})


export const onSearchButtonClickActionCreator= ()=> ({type: searchButtonValue})

window.store = store
export default store