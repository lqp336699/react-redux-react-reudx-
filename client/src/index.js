import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import rootReducer from './reducer/index'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

 
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger)
    )
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
