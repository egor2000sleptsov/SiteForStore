const searchValue = "changeSearchValue";
const searchButtonValue = 'searchButtonClicked';

const headerReducer = (state, action) => {
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