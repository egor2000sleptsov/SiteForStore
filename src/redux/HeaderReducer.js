const searchValue = "changeSearchValue";
const searchButtonValue = 'searchButtonClicked';

let initialState ={
    searchValue: ''
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case searchValue:
            state.searchValue = action.newValue
            return state
        case searchButtonValue:
            alert('clicked')
            return state
        default:
            return state
    }
}

export const onSearchValueChangeActionCreator = (value) => ({
    type: searchValue,
    newValue: value
})
export const onSearchButtonClickActionCreator = () => ({type: searchButtonValue})

export default headerReducer