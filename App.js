// App.js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
    return (
        // Inline a 2 ta {{}}, r vinno styleSheet e kore oita call korle 1ta {} dte hbe
        <View style={styles.container}>
            <Text style={{ color: "red" }}>Hello world</Text>
            <Text style={styles.text2_style}>2nd para</Text>
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
    text2_style: {
        color: "blue",
    },
});
