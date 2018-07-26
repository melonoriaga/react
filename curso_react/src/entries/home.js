import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home'
import data2 from '../api.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/index';
import data from '../schemas/index.js';

const initialState = {
    data: { 
        entities  : data.entities,
        categories: data.result.categories,
        search    : [],
    },
    modal: {
        visibility: false,
        mediaId   : null
    }
}

const store  = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const home_container = document.getElementById('home_container');

// render('Que voy a renderizar', 'donde lo hare');
render(
    <Provider store={store}>
        <Home />
    </Provider>,
    home_container 
);
