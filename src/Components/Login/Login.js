// src\Components\Login\Login.js

import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import backgroundImage from "../../../assets/images/login_background.jpg";

const Login = (props) => {
    const [authStates, setAuthStates] = useState({
        mode: "login",
        inputs: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    // ======================= switch Views ================//
    const switchViews = () => {
        setAuthStates({
            ...authStates,
            mode: authStates.mode === "login" ? "signup" : "login",
        });
    };
    let confiremPassField = null;
    if (authStates.mode === "signup") {
        confiremPassField = (
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={authStates.inputs.confirmPassword}
            />
        );
    }

    // ======================== return  =====================//
    return (
        <ImageBackground
            source={backgroundImage}
            style={{ width: "100%", flex: 1 }}
            // blur bg image
            blurRadius={8}
        >
            <View style={styles.loginView}>
                {/* ==================== switch Btn ===================== */}
                {/* spread operator diye class er property overwrite kora jabe */}
                <TouchableOpacity
                    style={{
                        ...styles.btnContainer,
                        backgroundColor: "#1167b1",
                        width: "85%",
                    }}
                    onPress={() => switchViews()}
                >
                    <Text style={styles.btnStyle}>
                        {authStates.mode === "login"
                            ? "Switch to Sign Up"
                            : "Switch to Login"}
                    </Text>
                </TouchableOpacity>
                {/* ======================= Text Box ================= */}
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
                {confiremPassField}

                {/* submit button using TouchableOpacity */}
                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btnStyle}>
                        {authStates.mode === "login" ? "Login" : "Sign Up"}
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
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
