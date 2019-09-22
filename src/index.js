import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/index";

import './index.css';
import MainApp from './MainApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <MainApp />
    </Provider>, 
    document.getElementById('root'));

serviceWorker.unregister();
