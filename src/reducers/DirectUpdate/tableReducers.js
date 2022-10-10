import { FETCH_ALL_FILTERS } from "../../constants/DirectUpdate/tableConstants";

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