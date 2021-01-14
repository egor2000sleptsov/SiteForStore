const SortChange = 'sortHasChange';
const filterChange = 'filterHasChange';

let initialState = {
    sortValue: '---',
    filter: {
        souvenirs: false,
        hat: false,
        pants: false,
        hoodies: false,
        shirts: false
    }
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SortChange:
            state.sortValue = action.par
            return state
        case filterChange:
            let value = action.value
            if (value === 'souvenirs')
                state.filter.souvenirs = !state.filter.souvenirs
            else if (value === 'hat')
                state.filter.hat = !state.filter.hat
            else if (value === 'pants')
                state.filter.pants = !state.filter.pants
            else if (value === 'hoodies')
                state.filter.hoodies = !state.filter.hoodies
            else if (value === 'shirts')
                state.filter.shirts = !state.filter.shirts
            return state
        default:
            return state
    }
}

export const onSortChangeActionCreator = (par) => ({type: SortChange, par: par})

export const onFilterChangeActionCreator = (value) => ({type: filterChange, value: value})

export default homeReducer