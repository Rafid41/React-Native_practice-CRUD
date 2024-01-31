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
    const [image, setImage] = useState("");

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
                        // placeList.push(InputValue)
                        if (inputValue !== "") {
                            // FlatList er jnno

                            props.addPlace({
                                key: Math.random().toString(),
                                value: inputValue,
                                // passing image here
                                image: {
                                    uri: "https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg",
                                },
                            });
                            setInputValue("");
                        }
                    }}
                />
            </View>
        </View>
    );
};

export default connect(null, mapDispatchToProps)(SharePlaces);
