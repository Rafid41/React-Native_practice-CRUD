// Components\PlaceList\PlaceList.js
import React from "react";
import { FlatList } from "react-native";
import ListItem from "../ListItem/ListItem";

const PlaceList = (props) => {
    return (
        <FlatList
            style={{ width: "100%" }}
            data={props.placeList}
            // "info" default parameter
            renderItem={(info) => {
                console.log("info", info.item.value);
                return (
                    <ListItem
                        placeName={info.item.value}
                        onItemPressed={() =>
                            props.handleSelectedPlace(info.item.key)
                        }
                        image={info.item.image}
                    />
                );
            }}
        />
    );
};

export default PlaceList;
