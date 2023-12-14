import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom"
import "./styles/global.scss"
import store from "./App/store.js"
import {Provider} from "react-redux"

document.addEventListener('DOMContentLoaded', () => {
    if (window.App && window.App.start) {
      window.App.start({ dealers: ['id1', 'id2'] });
}})


const root  = ReactDOM.createRoot(document.getElementById("app"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)