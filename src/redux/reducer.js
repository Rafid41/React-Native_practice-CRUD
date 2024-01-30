// src\redux\reducer.js
import * as actionTypes from "./actionTypes";

// initial state
const initState = {
    placeList: [],
};

export const rootReducer = (state = initState, action) => {
    switch (action.types) {
        case actionTypes.ADD_PLACE:
            return {
                ...state,
                placeList: state.placeList.concat(action.payload),
            };

        case actionTypes.DELETE_PLACE:
            return {
                ...state,
                placeList: state.placeList.filter(
                    (place) => place.key !== action.payload
                ),
            };

        default:
            return state;
    }
};