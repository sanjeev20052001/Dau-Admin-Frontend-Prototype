import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cargoReducer, chargeReducer, destinationReducer, loadReducer, originReducer, lvlReducer } from './reducers/DirectUpdate/filterReducer';
import { filterReducer } from './reducers/DirectUpdate/tableReducers';

const middleware = [thunk];

const reducers = combineReducers({
    lvl:lvlReducer,
    origin:originReducer,
    destination:destinationReducer,
    cargoType:cargoReducer,
    chargeName:chargeReducer,
    loadType:loadReducer,
    filter:filterReducer,
});

export const store = createStore(reducers, compose(applyMiddleware(...middleware))); 