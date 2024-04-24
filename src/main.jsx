import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom'
import './nullstyle.scss'

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);


