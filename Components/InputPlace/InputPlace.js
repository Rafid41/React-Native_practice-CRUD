// Components\InputPlace\InputPlace.js
import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

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
                            },
                        ]);
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
