// src\Components\Login\Login.js

import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

const Login = (props) => {
    const [authStates, setAuthStates] = useState({
        mode: "login",
        inputs: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    });
    return (
        <View style={styles.loginView}>
            <TextInput
                style={styles.input}
                placeholder="Your Email Address"
                value={authStates.inputs.email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={authStates.inputs.password}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={authStates.inputs.confirmPassword}
            />

            {/* submit button using TouchableOpacity */}
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnStyle}>
                    {authStates.mode === "login" ? "Login" : "Sign Up"}
                </Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    loginView: {
        // flex: 1 mane full jayga cover korbe
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: "85%",
        padding: 5,
        marginTop: 10,
        backgroundColor: "#eee",
        borderWidth: 1,
        borderColor: "#009688",
        borderRadius: 4,
    },
    btnStyle: {
        fontSize: 16,
        color: "#fff",
        alignSelf: "center",
    },
    btnContainer: {
        flexDirection: "row",
        width: 150,
        paddingVertical: 5,
        backgroundColor: "#009688",
        borderRadius: 5,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Login;
