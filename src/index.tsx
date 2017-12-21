import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import 'normalize.css';
import './index.css';
import {ConnectedApp} from './components/App';
import * as reducers from './reducers';

let store = createStore(combineReducers(reducers));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp/>
    </Provider>,
    document.getElementById('root')
);