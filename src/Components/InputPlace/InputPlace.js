// Components\InputPlace\InputPlace.js
import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import nature_img from "../../../assets/images/nature_1.jpg";

const InputPlace = (props) => {
    return (
        <View style={styles.InputView}>
            <TextInput
                style={{
                    width: "100%",
                    borderBottomWidth: 1,
                    borderColor: "green",
                    padding: 7,
                }}
                placeholder="Name of the place"
                value={props.InputValue}
                onChangeText={(text) => props.setInputValue(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    InputView: {
        padding: 20,
        width: "100%",
        marginTop: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default InputPlace;
