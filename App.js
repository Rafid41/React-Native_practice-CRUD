// App.js
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import InputPlace from "./Components/InputPlace/InputPlace";
import PlaceList from "./Components/PlaceList/PlaceList";

export default function App() {
    const [InputValue, setInputValue] = useState("");
    const [placeList, setPlaceList] = useState([]);

    return (
        <View style={styles.container}>
            <InputPlace
                InputValue={InputValue}
                setInputValue={setInputValue}
                placeList={placeList}
                setPlaceList={setPlaceList}
            />
            <PlaceList placeList={placeList} />
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
});
