// src\redux\reducer.js
import * as actionTypes from "./actionTypes";

// initial state
const initState = {
    placeList: [],
    // tracks if the user authenticated or not
    isAuth: false,
    token: null,
};

export const rootReducer = (state = initState, action) => {
    switch (action.type) {
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

        case actionTypes.SET_PLACES:
            return {
                ...state,
                placeList: action.payload,
            };

        case actionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                isAuth: true,
                token: action.payload,
            };

        default:
            return state;
    }
};
