import React from 'react';
import Carousel from "./Carousel/Carousel";
import {onSortChangeActionCreator} from "../../redux/HomeReducer";

function Home(props) {
    let sortEl = React.createRef()
    const onSortChange = event => {
        let action = onSortChangeActionCreator(sortEl.current.value)
        props.dispatch(action)
        console.log(sortEl.current.value)
    }


    return (
        <div>
            <Carousel/>
            <div>
                <select name="" onChange={event => onSortChange(event)} ref={sortEl} value={props.state.sortValue}>
                    <option>Сначало Дешевые</option>
                    <option>Сначало Дорогие</option>
                    <option>---</option>
                </select>
            </div>
            <div>
                <p><input type='checkbox' onChange={event => {console.log(event.target.checked)}}/><label>Сувениры</label></p>
                <p><input type='checkbox' onChange={event => {console.log(event.target.checked)}}/><label>Головный убор</label></p><b/>
                <p><input type='checkbox' onChange={event => {console.log(event.target.checked)}}/><label>Штаны</label></p><b/>
                <p><input type='checkbox' onChange={event => {console.log(event.target.checked)}}/><label>Толстовки</label></p><b/>
            </div>
        </div>
);
}
export default Home;