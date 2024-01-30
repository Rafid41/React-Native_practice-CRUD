// src\Components\MainComponent.js
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import InputPlace from "./InputPlace/InputPlace";
import PlaceList from "./PlaceList/PlaceList";
import PlaceDetail from "./PlaceDetail/PlaceDetail";

const MainComponent = () => {
    const [InputValue, setInputValue] = useState("");
    const [placeList, setPlaceList] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);

    const handleSelectedPlace = (key) => {
        const place = placeList.find((place) => {
            return place.key === key;
        });
        setSelectedPlace(place);
    };

    const handleHideModal = () => {
        setSelectedPlace(null);
    };

    const handleDeleteItem = (key) => {
        // return korbe j key pass kora key er sathe na mele
        setPlaceList(placeList.filter((place) => place.key != key));
        setSelectedPlace(null);
    };

    let placeDetail = null;
    if (selectedPlace !== null) {
        placeDetail = (
            <PlaceDetail
                place={selectedPlace}
                handleHideModal={handleHideModal}
                handleDeleteItem={handleDeleteItem}
            />
        );
    }

    return (
        <View style={styles.container}>
            {placeDetail}

            <InputPlace
                InputValue={InputValue}
                setInputValue={setInputValue}
                placeList={placeList}
                setPlaceList={setPlaceList}
            />
            <PlaceList
                placeList={placeList}
                handleSelectedPlace={handleSelectedPlace}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flrx-start",
        flexDirection: "column",
    },
});

export default MainComponent;
