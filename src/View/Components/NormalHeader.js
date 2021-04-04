import { View, TouchableOpacity, Text } from "react-native";
import { Icon } from "native-base";
import React from "react";
import { Colors } from "../Themes";

const NormalHeader = ({ navigation, title }) => {

    return (
        <View style={{ height: 60, width: "100%", flexDirection: 'row', backgroundColor: Colors.ember }}>
            <TouchableOpacity style={{
                flex: 2, justifyContent: "center",
                alignItems: 'center'
            }} onPress={() => { navigation.goBack() }}>
                <Icon style={{ color: "white" }}
                    type="MaterialIcons" name="keyboard-backspace" />
            </TouchableOpacity>
            <View style={{ flex: 8, justifyContent: "center", }}>
                <Text style={{
                    fontSize: 16, color: "white",
                    fontWeight: '700'
                }}>{title}</Text>
            </View>
        </View>
    )
}

export default NormalHeader;