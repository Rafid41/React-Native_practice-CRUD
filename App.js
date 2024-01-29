// App.js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
    const handleInputChange = (text) => {
        alert(text);
    };
    return (
        <View style={styles.container}>
            <Text>Hello world</Text>
            <Text>second para</Text>
            {/* placeholder props */}
            <TextInput
                style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                placeholder="Give Input"
                //eta ekta fn expect ore, ja pass korbo se ta fn er vitor pass kore dbe
                onChangeText={(text) => handleInputChange(text)}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
