import React from 'react';
import CSS_Classes from "./Filter.module.css";

function Filter(props) {
    const handleChange = (event) => {
        props.filterChange(event.target.value)
    }
    let clothes = React.createRef()
    let cap = React.createRef()
    let cups = React.createRef()
    let magnets = React.createRef()
    let notes = React.createRef()
    let pens = React.createRef()
    let icons = React.createRef()
    let stickers = React.createRef()
    let umbrellas = React.createRef()
    return (
        <div className={CSS_Classes.categorys}>
            <label>
                <input className={CSS_Classes.checkbox}
                    type="checkbox" name="" id=""
                       ref={clothes}
                       value='clothes'
                       onChange={event => handleChange(event)}
                       checked={props.filter.clothes}/>
                <span className={CSS_Classes.spans}>Одежда</span>
            </label><br/>
            <label>
                <input className={CSS_Classes.checkbox}
                    type="checkbox" name="" id=""
                       ref={cap}
                       value='cap'
                       onChange={event => handleChange(event)}
                       checked={props.filter.cap}/>
                <span className={CSS_Classes.spans}>Бейсболки</span>
            </label><br/>
            <label>
                <input className={CSS_Classes.checkbox}
                    type="checkbox" name="" id=""
                       ref={cups}
                       value='cups'
                       onChange={event => handleChange(event)}
                       checked={props.filter.cups}/>
                <span className={CSS_Classes.spans}>Кружки и термостаканы</span>
            </label><br/>
            <label>
                <input className={CSS_Classes.checkbox}
                    type="checkbox" name="" id=""
                       ref={magnets}
                       value='magnets'
                       onChange={event => handleChange(event)}
                       checked={props.filter.magnets}/>
                <span className={CSS_Classes.spans}>Магниты</span>
            </label><br/>
            <label>
                <input className={CSS_Classes.checkbox}
                    type="checkbox" name="" id=""
                       ref={notes}
                       value='notes'
                       onChange={event => handleChange(event)}
                       checked={props.filter.notes}/>
                <span className={CSS_Classes.spans}>Тетради, блокноты</span>
            </label><br/>
            <label>
                <input className={CSS_Classes.checkbox}
                    type="checkbox" name="" id=""
                       ref={pens}
                       value='pens'
                       onChange={event => handleChange(event)}
                       checked={props.filter.pens}/>
                <span className={CSS_Classes.spans}>Письменные принадлежности</span>
            </label><br/>
            <label>
                <input className={CSS_Classes.checkbox}
                    type="checkbox" name="" id=""
                       ref={icons}
                       value='icons'
                       onChange={event => handleChange(event)}
                       checked={props.filter.icons}/>
                <span className={CSS_Classes.spans}>Значки</span>
            </label><br/>
            <label>
                <input className={CSS_Classes.checkbox}
                    type="checkbox" name="" id=""
                       ref={stickers}
                       value='stickers'
                       onChange={event => handleChange(event)}
                       checked={props.filter.stickers}/>
                <span className={CSS_Classes.spans}>Открытки, наклейки</span>
            </label><br/>
            <label>
                <input className={CSS_Classes.checkbox}
                    type="checkbox" name="" id=""
                       ref={umbrellas}
                       value='umbrellas'
                       onChange={event => handleChange(event)}
                       checked={props.filter.umbrellas}/>
                <span className={CSS_Classes.spans}>Зонты и дождевики</span>
            </label>
        </div>
    );
}

export default Filter;