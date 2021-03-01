import { View, TouchableOpacity, Text } from "react-native";
import { Icon } from "native-base";
import React from "react";

const NormalHeader = ({ navigation, title }) => {

    return (
        <View style={{ height: 60, width: "100%", flexDirection: 'row' }}>
            <TouchableOpacity style={{
                flex: 2, justifyContent: "center",
                alignItems: 'center'
            }} onPress={() => { navigation.goBack() }}>
                <Icon style={{ color: "black" }}
                    type="MaterialIcons" name="keyboard-backspace" />
            </TouchableOpacity>
            <View style={{ flex: 8, justifyContent: "center", }}>
                <Text style={{
                    fontSize: 16, color: "black",
                    fontWeight: '700'
                }}>{title}</Text>
            </View>
        </View>
    )
}

export default NormalHeader;