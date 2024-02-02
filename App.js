// App.js
import "react-native-gesture-handler"; // file er surute ei import thakbe
import React from "react";
import { TouchableOpacity } from "react-native";
import { Provider } from "react-redux";
import Store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/Components/Login/Login";
import NavigationTab from "./src/Components/NavigationTab/NavigationTab";
import { navigationRef, navigate } from "./src/NavigationRoot";
import Icons from "react-native-vector-icons/FontAwesome";

//============= main stack  //stack navigation stack akare shajabe
const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Provider store={Store}>
                {/* Routing ekhane */}
                <Stack.Navigator>
                    {/* name="Login" navbar e login dekhabe name */}
                    {/* Stack e kono route add korle ekta props pass hy, eta pore access kora jay */}
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen
                        name="Places"
                        component={NavigationTab}
                        // options default props, eta attribute change kore
                        options={{
                            // header er left side e kisu dekhabebna, age back btn silo
                            headerLeft: null,
                            // right e logout btn
                            headerRight: () => (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigate("Login");
                                    }}
                                >
                                    <Icons
                                        name="power-off"
                                        size={26}
                                        style={{ paddingRight: 10 }}
                                    />
                                </TouchableOpacity>
                            ),
                        }}
                    />
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>
    );
}
