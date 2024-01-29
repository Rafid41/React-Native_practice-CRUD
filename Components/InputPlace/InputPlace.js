// Components\InputPlace\InputPlace.js
import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import nature_img from "../../assets/images/nature_1.jpg";

const InputPlace = (props) => {
    return (
        <View style={styles.InputView}>
            <TextInput
                style={{
                    width: "80%",
                    borderBottomWidth: 1,
                    borderColor: "green",
                    padding: 7,
                }}
                placeholder="Add a Place..."
                value={props.InputValue}
                onChangeText={(text) => props.setInputValue(text)}
            />
            <Button
                title="Add"
                onPress={() => {
                    // placeList.push(InputValue)
                    if (props.InputValue != "") {
                        // FlatList er jnno
                        props.setPlaceList([
                            ...props.placeList,
                            {
                                key: Math.random().toString(),
                                value: props.InputValue,
                                // passing image here
                                image: {
                                    uri: "https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg",
                                },
                            },
                        ]);
                        props.setInputValue("");
                    }
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    InputView: {
        padding: 20,
        width: "100%",
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default InputPlace;
