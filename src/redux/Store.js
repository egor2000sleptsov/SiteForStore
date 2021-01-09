import fb from "../Firebase.js";


let rerenderEntireThree = () => {
    console.log('hey')
}

let state = {
    header: {
        searchValue: ''
    }
}

export let refreshState = () => {

}

export const changeSearchValue = newValue => {
    state.header.searchValue = newValue
    rerenderEntireThree(state)
}

export const subscride = (observer) => {
    rerenderEntireThree = observer
}

window.state = state
export default state