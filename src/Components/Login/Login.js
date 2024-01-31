// src\Components\Login\Login.js

import React from "react";
import { View, Text, Button } from "react-native";

const Login = (props) => {
    return (
        <View>
            <Text>Login</Text>
            <Button
                title="Login"
                onPress={() => {
                    // Stack route er name=="Homme"
                    props.navigation.navigate("Home");
                }}
            />
        </View>
    );
};

export default Login;
