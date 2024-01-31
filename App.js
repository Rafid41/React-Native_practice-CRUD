// App.js
import "react-native-gesture-handler"; // file er surute ei import thakbe
import React from "react";
import MainComponent from "./src/MainComponent";
import { Provider } from "react-redux";
import Store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/Components/Login/Login";

// main stack  //stack navigationk stack akare shajabe
const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Provider store={Store}>
                {/* Routing ekhane */}
                <Stack.Navigator>
                    {/* name="Login" navbar e login dekhabe name */}
                    <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>
    );
}
