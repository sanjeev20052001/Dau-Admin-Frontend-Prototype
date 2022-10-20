import { FETCH_ALL_FILTERS,UPDATE_SINGLE_FIELD } from "../../constants/DirectUpdate/tableConstants";

export const filterReducer = ( state={filteredData:[]},action ) => {
    switch(action.type)
    {
        case FETCH_ALL_FILTERS:
            console.log(action.payload);
            return {...state,filteredData:action.payload};
        default:
            return state;
    }
};

export const singleFieldUpdateReducer = ( state={filteredData:[]},action ) => {
    switch(action.type)
    {
        case UPDATE_SINGLE_FIELD:
            console.log(action.payload);
            return {...state,filteredData:action.payload};
        default:
            return state;
    }
};