import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { order } from './order';
import { shoppingcart } from './shoppingcart'


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            order,
            shoppingcart
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}