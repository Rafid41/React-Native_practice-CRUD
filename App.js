// App.js
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    FlatList,
} from "react-native";
import { useState } from "react";
import ListItem from "./Components/ListItem/ListItem";

export default function App() {
    const [InputValue, setInputValue] = useState("");
    const [placeList, setPlaceList] = useState([]);

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
                            // FlatList er jnno
                            setPlaceList([
                                ...placeList,
                                {
                                    key: Math.random().toString(),
                                    value: InputValue,
                                },
                            ]);
                        }
                    }}
                />
            </View>
            {/* FlatList ScrollVIew we moto kaj kore, bt total data eksathe load korena
            jototuk data scroll kore gese tar age pore kisu generate kore
            dynamically generate korte korte jay */}
            <FlatList
                style={{ width: "100%" }}
                data={placeList}
                // "info" default parameter
                renderItem={(info) => {
                    return (
                        <ListItem
                            placeName={info.item.value}
                            onItemPressed={() => alert(info.item.value)}
                        />
                    );
                }}
            />
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
