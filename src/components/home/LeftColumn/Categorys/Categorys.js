import React from 'react';
import CSS_Classes from "./Categorys.module.css";

function Categorys(props) {
    const handleChange = (event) => {
        props.filterChange(event.target.value)
        }

    let souvenirs = React.createRef()
    let hat = React.createRef()
    let pants = React.createRef()
    let hoodies = React.createRef()
    let shirts = React.createRef()

    return (
        <div className={CSS_Classes.categorys}>
            <div className={CSS_Classes.checkbox}><p><label className={CSS_Classes.customCheckbox}><input type='checkbox' onChange={event => {
                handleChange(event)
            }} checked={props.filter.souvenirs} value='souvenirs' ref={souvenirs}/><span>Сувениры</span></label></p></div>
            <p><label ><input type='checkbox' onChange={event => {
                handleChange(event)
            }} checked={props.filter.hat} value='hat' ref={hat}/>Головный убор</label></p><b/>
            <p><label ><input type='checkbox' onChange={event => {
                handleChange(event)
            }} checked={props.filter.pants} value='pants' ref={pants}/>Штаны</label></p><b/>
            <p><label ><input type='checkbox' onChange={event => {
                handleChange(event)
            }} checked={props.filter.hoodies} value='hoodies' ref={hoodies}/>Толстовки</label></p><b/>
            <p><label ><input type='checkbox' onChange={event => {
                handleChange(event)
            }} checked={props.filter.shirts} value='shirts' ref={shirts}/>Футболки</label></p><b/>
        </div>
    );
}

export default Categorys;