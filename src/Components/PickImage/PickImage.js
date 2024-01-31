// src\Components\PickImage\PickImage.js
import React from "react";
import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const PickImage = (props) => {
    const handleImagePick = async () => {
        try {
            // gallary open hbe: launchImageLibraryAsync
            // camera open hbe: launchCameraAsync
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            // cancel na korle
            if (!result.canceled) {
                //  props.setImage(result.uri); hoy na
                props.setImage(result.assets[0].uri); // or result["assets"][0]["uri"]
                console.log("res", result.assets[0].uri);
            }
        } catch (E) {
            console.log(result.assets[0].uri);
        }
    };
    let showImage = null;
    if (props.image !== "") {
        showImage = (
            <Image
                source={{ uri: props.image }}
                style={{ width: "100%", height: 200, marginBottom: 10 }}
            />
        );
        console.log(showImage);
    }
    return (
        <View>
            {/* image picker */}
            <View>
                {showImage}
                <Button title="Pick an Image" onPress={handleImagePick} />
            </View>
        </View>
    );
};

export default PickImage;
