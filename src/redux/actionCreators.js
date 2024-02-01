// src\redux\actionCreators.js
import * as actionTypes from "./actionTypes";

// firebase database e upload
// axios o use kora jay
// ekhane fetch use kora holo
export const addPlace = (place) => {
    return (disatch) => {
        // places table e store
        // link/uri , additional data
        fetch(
            "https://my-place-react-native-default-rtdb.asia-southeast1.firebasedatabase.app/places.json",
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

export const deletePlace = (key) => {
    return {
        type: actionTypes.DELETE_PLACE,
        payload: key,
    };
};
