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
            <p><input type='checkbox' onChange={event => {
                handleChange(event)
            }} checked={props.filter.souvenirs} value='souvenirs' ref={souvenirs}/><label>Сувениры</label></p>
            <p><input type='checkbox' onChange={event => {
                handleChange(event)
            }} checked={props.filter.hat} value='hat' ref={hat}/><label>Головный убор</label></p><b/>
            <p><input type='checkbox' onChange={event => {
                handleChange(event)
            }} checked={props.filter.pants} value='pants' ref={pants}/><label>Штаны</label></p><b/>
            <p><input type='checkbox' onChange={event => {
                handleChange(event)
            }} checked={props.filter.hoodies} value='hoodies' ref={hoodies}/><label>Толстовки</label></p><b/>
            <p><input type='checkbox' onChange={event => {
                handleChange(event)
            }} checked={props.filter.shirts} value='shirts' ref={shirts}/><label>Футболки</label></p><b/>
        </div>
    );
}

export default Categorys;