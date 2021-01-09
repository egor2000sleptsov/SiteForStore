import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/Store.js";
//import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} changeSearchValue={store.changeSearchValue.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireThree(store.getState())

store.subscride(rerenderEntireThree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
