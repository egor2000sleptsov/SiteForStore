import fb from "../Firebase.js";

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
    }
}


window.store = store
export default store