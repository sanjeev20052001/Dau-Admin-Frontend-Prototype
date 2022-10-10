import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cargoReducer, chargeReducer, destinationReducer, filtersReducers, legReducer, linerReducer, loadReducer, originReducer, vendorReducer } from './reducers/DirectUpdate/filterReducer';
import { filterReducer } from './reducers/DirectUpdate/tableReducers';

const middleware = [thunk];

const reducers = combineReducers({
    leg:legReducer,
    vendor:vendorReducer,
    liner:linerReducer,
    origin:originReducer,
    destination:destinationReducer,
    cargoType:cargoReducer,
    chargeName:chargeReducer,
    loadType:loadReducer,
    filter:filterReducer,
    filters:filtersReducers
});

export const store = createStore(reducers, compose(applyMiddleware(...middleware))); 