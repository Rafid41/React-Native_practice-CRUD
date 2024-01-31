// src\Components\NavigationTab\NavigationTab.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SharePlaces from "../SharePlaces/SharePlaces";
import FindPlaces from "../FindPlaces/FindPlaces";
import Icons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const NavigationTab = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Find Places"
                component={FindPlaces}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icons name="map" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Share Places"
                component={SharePlaces}
                // show icons
                options={{
                    // default color and size
                    tabBarIcon: ({ color, size }) => (
                        <Icons name="people" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default NavigationTab;
