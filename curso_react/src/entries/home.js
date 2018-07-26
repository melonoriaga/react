import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/index';

const store  = createStore(
    reducer,
    {},
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
