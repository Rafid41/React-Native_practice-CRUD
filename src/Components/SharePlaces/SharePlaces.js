// src\Components\SharePlaces\SharePlaces.js

import React, { useState } from "react";
import InputPlace from "../InputPlace/InputPlace";
import { addPlace } from "../../redux/actionCreators";
import { connect } from "react-redux";

// dispatchToProps
const mapDispatchToProps = (dispatch) => {
    return {
        addPlace: (place) => dispatch(addPlace(place)),
    };
};

const SharePlaces = (props) => {
    const [InputValue, setInputValue] = useState("");
    return (
        <InputPlace
            InputValue={InputValue}
            setInputValue={setInputValue}
            addPlace={props.addPlace}
        />
    );
};

export default connect(null, mapDispatchToProps)(SharePlaces);
