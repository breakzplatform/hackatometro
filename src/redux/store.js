import { createStore , applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import appState from './app-state';

export default createStore(
    appState,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        createLogger() // neat middleware that logs actions
    )
);