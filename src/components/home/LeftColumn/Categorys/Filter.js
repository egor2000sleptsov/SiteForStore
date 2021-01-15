import React from 'react';
import CSS_Classes from "./Filter.module.css";

function Filter(props) {
    const handleChange = (event) => {
        debugger
        props.filterChange(event.target.value)
    }
    debugger
    let clothes = React.createRef()
    let cap = React.createRef()
    let cups = React.createRef()
    let magnets = React.createRef()
    let notes = React.createRef()
    let pens = React.createRef()
    let icons = React.createRef()
    let stickers = React.createRef()
    let umbrellas = React.createRef()
    debugger
    return (
        <div className={CSS_Classes.categorys}>
            <label>
                <input type="checkbox" name="" id=""
                       ref={clothes}
                       value='clothes'
                       onChange={event => handleChange(event)}
                       checked={props.filter.clothes}/>
                <span>Одежда</span>
            </label><br/>
            <label>
                <input type="checkbox" name="" id=""
                       ref={cap}
                       value='cap'
                       onChange={event => handleChange(event)}
                       checked={props.filter.cap}/>
                <span>Бейсболки</span>
            </label><br/>
            <label>
                <input type="checkbox" name="" id=""
                       ref={cups}
                       value='cups'
                       onChange={event => handleChange(event)}
                       checked={props.filter.cups}/>
                <span>Кружки и термостаканы</span>
            </label><br/>
            <label>
                <input type="checkbox" name="" id=""
                       ref={magnets}
                       value='magnets'
                       onChange={event => handleChange(event)}
                       checked={props.filter.magnets}/>
                <span>Магниты</span>
            </label><br/>
            <label>
                <input type="checkbox" name="" id=""
                       ref={notes}
                       value='notes'
                       onChange={event => handleChange(event)}
                       checked={props.filter.notes}/>
                <span>Тетради, блокноты</span>
            </label><br/>
            <label>
                <input type="checkbox" name="" id=""
                       ref={pens}
                       value='pens'
                       onChange={event => handleChange(event)}
                       checked={props.filter.pens}/>
                <span>Письменные принадлежности</span>
            </label><br/>
            <label>
                <input type="checkbox" name="" id=""
                       ref={icons}
                       value='icons'
                       onChange={event => handleChange(event)}
                       checked={props.filter.icons}/>
                <span>Значки</span>
            </label><br/>
            <label>
                <input type="checkbox" name="" id=""
                       ref={stickers}
                       value='stickers'
                       onChange={event => handleChange(event)}
                       checked={props.filter.stickers}/>
                <span>Открытки, наклейки</span>
            </label><br/>
            <label>
                <input type="checkbox" name="" id=""
                       ref={umbrellas}
                       value='umbrellas'
                       onChange={event => handleChange(event)}
                       checked={props.filter.umbrellas}/>
                <span>Зонты и дождевики</span>
            </label>
        </div>
    );
}

export default Filter;