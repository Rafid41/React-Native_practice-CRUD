// src\Components\SharePlaces\SharePlaces.js

import React, { useState } from "react";
import InputPlace from "../InputPlace/InputPlace";
import PickImage from "../PickImage/PickImage";
import { addPlace } from "../../redux/actionCreators";
import { connect } from "react-redux";
import { View, Button } from "react-native";

// dispatchToProps
const mapDispatchToProps = (dispatch) => {
    return {
        addPlace: (place) => dispatch(addPlace(place)),
    };
};

const SharePlaces = (props) => {
    const [inputValue, setInputValue] = useState("");
    // PickImage.js theke ei state e image uri set hoy
    const [image, setImage] = useState("");

    const handleAddingPlace = () => {
        if (inputValue === "" || image === "") {
            if (image === "") {
                alert("Pick an Image");
            }
        } else {
            // FlatList er jnno
            props.addPlace({
                key: Math.random().toString(),
                value: inputValue,
                // passing image uri link here
                image: image,
            });
            setInputValue("");
            setImage("");

            // redirect to list page
            props.navigation.navigate("Find Places");
        }
    };

    return (
        <View>
            <PickImage image={image} setImage={setImage} />
            <InputPlace inputValue={inputValue} setInputValue={setInputValue} />
            <View
                style={{
                    alignItems: "center",
                }}
            >
                <Button
                    title="Add Place"
                    onPress={() => {
                        handleAddingPlace();
                    }}
                />
            </View>
        </View>
    );
};

export default connect(null, mapDispatchToProps)(SharePlaces);
