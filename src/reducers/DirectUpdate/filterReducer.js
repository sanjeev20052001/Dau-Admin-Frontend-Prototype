import { FETCH_ALL_LEG,
    FETCH_ALL_VENDOR,
    FETCH_ALL_LINER,
    FETCH_ALL_ORIGIN,
    FETCH_ALL_DESTINATION,
    FETCH_ALL_CARGO_TYPE,
    FETCH_ALL_CHARGE_NAME,
    FETCH_ALL_LOAD_TYPE,
    FETCH_ALL_FILTERS
} from "../../constants/DirectUpdate/filterConstants";


export const legReducer = ( state={leg:[]},action ) => {
    switch(action.type)
    {
        case FETCH_ALL_LEG:
            console.log(action.payload);
            return {...state,leg:action.payload};
        default:
            return state;
    }
};

export const vendorReducer = ( state={vendor:[]},action ) => {
    switch(action.type)
    {
        case FETCH_ALL_VENDOR:
            console.log(action.payload);
            return {...state,vendor:action.payload};
        default:
            return state;
    }
};

export const linerReducer = ( state={liner:[]},action ) => {
    switch(action.type)
    {
        case FETCH_ALL_LINER:
            console.log(action.payload);
            return {...state,liner:action.payload};
        default:
            return state;
    }
};

export const originReducer = ( state={origin:[]},action ) => {
    switch(action.type)
    {
        case FETCH_ALL_ORIGIN:
            console.log(action.payload);
            return {...state,origin:action.payload};
        default:
            return state;
    }
};

export const destinationReducer = ( state={destination:[]},action ) => {
    switch(action.type)
    {
        case FETCH_ALL_DESTINATION:
            console.log(action.payload);
            return {...state,destination:action.payload};
        default:
            return state;
    }
};

export const cargoReducer = ( state={cargo:[]},action ) => {
    switch(action.type)
    {
        case FETCH_ALL_CARGO_TYPE:
            console.log(action.payload);
            return {...state,cargo:action.payload};
        default:
            return state;
    }
};

export const chargeReducer = ( state={charge:[]},action ) => {
    switch(action.type)
    {
        case FETCH_ALL_CHARGE_NAME:
            console.log(action.payload);
            return {...state,charge:action.payload};
        default:
            return state;
    }
};

export const loadReducer = ( state={load:[]},action ) => {
    switch(action.type)
    {
        case FETCH_ALL_LOAD_TYPE:
            console.log(action.payload);
            return {...state,load:action.payload};
        default:
            return state;
    }
};

export const filtersReducers = ( state={filters:[]},action ) => {
    switch(action.type)
    {
        case FETCH_ALL_FILTERS:
            console.log(action.payload);
            return {...state,filters:action.payload};
        default:
            return state;
    }
};