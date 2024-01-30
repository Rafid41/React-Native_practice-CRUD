// src\Components\MainComponent.js
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import InputPlace from "./Components/InputPlace/InputPlace";
import PlaceList from "./Components/PlaceList/PlaceList";
import PlaceDetail from "./Components/PlaceDetail/PlaceDetail";
import { connect } from "react-redux";
import { addPlace, deletePlace } from "./redux/actionCreators";

// redux er state k props e convert korbe
const mapStateToProps = (state) => {
    return {
        placeList: state.placeList,
    };
};

// dispatchToProps
const mapDispatchToProps = (dispatch) => {
    return {
        addPlace: (place) => dispatch(addPlace(place)),
        deletePlace: (key) => dispatch(deletePlace(key)),
    };
};

const MainComponent = (props) => {
    const [InputValue, setInputValue] = useState("");
    const [selectedPlace, setSelectedPlace] = useState(null);

    const handleSelectedPlace = (key) => {
        const place = props.placeList.find((place) => {
            return place.key === key;
        });
        setSelectedPlace(place);
    };

    const handleHideModal = () => {
        setSelectedPlace(null);
    };

    const handleDeleteItem = (key) => {
        // return korbe j key pass kora key er sathe na mele
        props.deletePlace(key);
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
                placeList={props.placeList}
                addPlace={props.addPlace}
            />
            <PlaceList
                placeList={props.placeList}
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
        justifyContent: "flex-start",
        flexDirection: "column",
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
