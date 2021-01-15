import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "./StoreContext";
//import reportWebVitals from './reportWebVitals';

let rerenderEntireThree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App dispatch={store.dispatch}/>
        </Provider>,
        document.getElementById('root')
    );
}

rerenderEntireThree(store.getState())

store.subscribe(() => {
    rerenderEntireThree(store.getState())
})
// store.subscride(() => {
//     let state  = store.getState()
//     rerenderEntireThree(state)
// })
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
