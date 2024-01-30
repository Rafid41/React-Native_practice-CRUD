// Components\ListItem\ListItem.js
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableHighlight,
    TouchableOpacity,
    Pressable,
    Image,
} from "react-native";
import React from "react";

const ListItem = (props) => {
    return (
        // make it Touchable
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem}>
                <Image
                    source={props.image}
                    style={{
                        width: 50,
                        height: 50,
                    }}
                />
                <Text style={{ paddingLeft: 15 }}>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        margin: 5,
        flexDirection: "row",
    },
});

export default ListItem;
