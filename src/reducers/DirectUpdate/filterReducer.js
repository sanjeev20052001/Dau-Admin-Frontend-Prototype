import { FETCH_ALL_LVL,
    FETCH_ALL_ORIGIN,
    FETCH_ALL_DESTINATION,
    FETCH_ALL_CARGO_TYPE,
    FETCH_ALL_CHARGE_NAME,
    FETCH_ALL_LOAD_TYPE
} from "../../constants/DirectUpdate/filterConstants";


export const lvlReducer = ( state={lvl:{}},action ) => {
    switch(action.type)
    {
        case FETCH_ALL_LVL:
            console.log(action.payload);
            return {...state,lvl:action.payload};
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