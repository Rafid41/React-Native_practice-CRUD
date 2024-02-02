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
    // ================ auth state ===================//

    const [authStates, setAuthStates] = useState({
        mode: "login",
        inputs: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    // ================ handle Auth =======================//
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleAuth = () => {
        const email = authStates.inputs.email;
        const password = authStates.inputs.password;
        const confirmPassword = authStates.inputs.confirmPassword;

        if (email !== "" && password !== "") {
            if (re.test(email)) {
                // process auth
                if (authStates.mode === "login") {
                    props.navigation.navigate("Home");
                } else {
                    if (password === confirmPassword) {
                        props.navigation.navigate("Home");
                    } else {
                        alert("Password Fields doesn't match");
                    }
                }
            } else {
                alert("Invalid Email");
            }
        } else {
            alert("Fill all fields");
        }
    };

    // ======================= switch Views ================//
    const switchViews = () => {
        setAuthStates({
            ...authStates,
            mode: authStates.mode === "login" ? "signup" : "login",
            inputs: {
                email: "",
                password: "",
                confirmPassword: "",
            },
        });
    };
    let confirmPassField = null;
    if (authStates.mode === "signup") {
        confirmPassField = (
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={authStates.inputs.confirmPassword}
                onChangeText={(value) => updateInputs(value, "confirmPassword")}
            />
        );
    }

    // ======================= update Inputs==============//
    const updateInputs = (value, inputFieldName) => {
        setAuthStates({
            ...authStates,
            inputs: {
                ...authStates.inputs,
                // dynamically update submitted field
                [inputFieldName]: value,
            },
        });
    };

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
                    onChangeText={(value) => updateInputs(value, "email")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={authStates.inputs.password}
                    onChangeText={(value) => updateInputs(value, "password")}
                />
                {confirmPassField}

                {/*======== submit button using TouchableOpacity ========== */}
                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={() => {
                        handleAuth();
                    }}
                >
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
