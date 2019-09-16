import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import MyApp from './App'

const middleware = [thunk]

middleware.push(createLogger())

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
    applyMiddleware(...middleware),
))

render(
    <Provider store={store}>
        <MyApp />
    </Provider>,
    document.getElementById('app')
)
