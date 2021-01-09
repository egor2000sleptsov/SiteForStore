const SortChange = 'sortHasChange';

let initialState = {
    sortValue: '---'
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SortChange:
            state.sortValue = action.par
            return state
        default:
            return state
    }
}

export const onSortChangeActionCreator = (par) => ({type: SortChange, par: par})

export default homeReducer