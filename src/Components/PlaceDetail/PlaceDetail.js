// Components\PlaceDetail\PlaceDetail.js
import React from "react";
import {
    View,
    Modal,
    Image,
    Text,
    Button,
    TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const PlaceDetail = (props) => {
    return (
        <Modal>
            <View>
                <Image
                    source={props.place.image}
                    // internet theke image provide korle width and height dewa lagbe must
                    style={{
                        width: "100%",
                        height: 300,
                    }}
                />
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 40,
                    }}
                >
                    {props.place.value}
                </Text>
                <View style={{ alignItems: "center" }}>
                    {/* just icon name ta copy kore boshate hbe
                        eta button er moto kaj korbe onPress dle
                     */}
                    <TouchableOpacity
                        onPress={() => {
                            props.handleDeleteItem(props.place.key);
                        }}
                    >
                        <Icon name="trash" size={60} color="red" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.handleHideModal()}>
                        <Icon name="times-circle" size={60} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default PlaceDetail;
