// src\redux\actionCreators.js
import * as actionTypes from "./actionTypes";
import { navigate } from "../NavigationRoot";

//================ firebase database e upload ====================//
// axios o use kora jay
// ekhane fetch use kora holo
export const addPlace = (place) => {
    // auto state ashe reducer theke, variable(ekhane getState) e store korte hy
    return (dispatch, getState) => {
        let token = getState().token;
        // places table e store
        // link/uri , additional data
        fetch(
            `https://my-place-react-native-default-rtdb.asia-southeast1.firebasedatabase.app/places.json?auth=${token}`,
            {
                method: "POST",
                body: JSON.stringify(place),
            }
        )
            .catch((error) => console.log(error))
            // error na hole
            .then((response) => response.json())
            .then((data) => console.log(data));
    };
};

// ============== to reducer ====================//
export const setPlaces = (places) => {
    return {
        type: actionTypes.SET_PLACES,
        payload: places,
    };
};

//================ retrieve from firebase ======================//
export const loadPlaces = () => (dispatch, getState) => {
    let token = getState().token;
    fetch(
        `https://my-place-react-native-default-rtdb.asia-southeast1.firebasedatabase.app/places.json?auth=${token}`
    )
        .catch((err) => {
            alert("something went wrong, sorry");
            console.log(err);
        })
        .then((res) => res.json())
        .then((data_from_firebase) => {
            const places = [];

            for (let key in data_from_firebase) {
                places.push({
                    ...data_from_firebase[key],
                    key: key,
                });
            }

            dispatch(setPlaces(places));
        });
};

// =================== delete ==================//
export const deletePlace = (key) => {
    return {
        type: actionTypes.DELETE_PLACE,
        payload: key,
    };
};

// =============== authenticate user ==========//
// send to reducer
export const authUser = (token) => {
    return {
        type: actionTypes.AUTHENTICATE_USER,
        payload: token,
    };
};

// ============= SIGN UP and LOGIN ================//
const API = "AIzaSyD97bIUBjZWLCQntZpKSqp5RwBLAoEdJcc";

export const tryAuth = (email, password, mode) => (dispatch) => {
    if (mode == "signup") {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API}`;
    } else if (mode == "login") {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API}`;
    }

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
    })
        .catch((err) => {
            console.log(err);
            alert("Authentication Failed!");
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                alert(data.error.message);
            } else {
                // dispacth to reducer
                dispatch(authUser(data.idToken));
                navigate("Places");
            }
            console.log(data);
        });
};
