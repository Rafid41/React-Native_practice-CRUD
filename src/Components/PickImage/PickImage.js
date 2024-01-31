// src\Components\PickImage\PickImage.js
import React from "react";
import { View, Button } from "react-native";
const PickImage = (props) => {
    return (
        <View>
            {/* image picker */}
            <View>
                <Button title="Pick an Image" />
            </View>
        </View>
    );
};

export default PickImage;
