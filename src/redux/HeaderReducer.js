const searchBoxValue = "changeSearchValue";
const searchButtonValue = 'searchButtonClicked';

let initialState = {
    searchBoxValue: '',
    searchResult: ''
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case searchBoxValue: {
            let copyState = {...state}
            copyState.searchBoxValue = action.newValue
            if (action.newValue.length === 0)
                copyState.searchResult = action.newValue
            return copyState
        }
        case searchButtonValue: {
            let copyState = {...state}
            copyState.searchResult = copyState.searchBoxValue
            return copyState
        }
        default:
            return state
    }
}

export const onSearchValueChangeActionCreator = (value) => ({
    type: searchBoxValue,
    newValue: value
})
export const onSearchButtonClickActionCreator = () => ({
    type: searchButtonValue
})

export default headerReducer