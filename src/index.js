import store from "./Redux/store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);