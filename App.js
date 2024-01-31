// App.js
import "react-native-gesture-handler"; // file er surute ei import thakbe
import React from "react";
import { Provider } from "react-redux";
import Store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/Components/Login/Login";
import NavigationTab from "./src/Components/NavigationTab/NavigationTab";

// main stack  //stack navigation stack akare shajabe
const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Provider store={Store}>
                {/* Routing ekhane */}
                <Stack.Navigator>
                    {/* name="Login" navbar e login dekhabe name */}
                    {/* Stack e kono route add korle ekta props pass hy, eta pore access kora jay */}
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Home" component={NavigationTab} />
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>
    );
}
