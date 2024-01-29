// App.js
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
} from "react-native";
import { useState } from "react";
import ListItem from "./Components/ListItem/ListItem";

export default function App() {
    const [InputValue, setInputValue] = useState("");
    const [placeList, setPlaceList] = useState([]);

    const list = placeList.map((item, index) => {
        // sending props=> if touched, show item
        return (
            <ListItem
                placeName={item}
                key={index}
                onItemPressed={() => alert(item)}
            />
        );
    });
    return (
        <View style={styles.container}>
            <View style={styles.InputView}>
                <TextInput
                    style={{
                        width: "80%",
                        borderBottomWidth: 1,
                        borderColor: "green",
                        padding: 7,
                    }}
                    placeholder="Add a Place..."
                    value={InputValue}
                    onChangeText={(text) => setInputValue(text)}
                />
                <Button
                    title="Add"
                    onPress={() => {
                        // placeList.push(InputValue)
                        if (InputValue != "") {
                            setPlaceList([...placeList, InputValue]);
                        }
                    }}
                />
            </View>
            <ScrollView style={{ width: "100%" }}>{list}</ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flrx-start",
        flexDirection: "column",
    },
    InputView: {
        padding: 20,
        width: "100%",
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
