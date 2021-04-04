import React, { Component } from 'react'
import { Platform, TextInput, ScrollView, SafeAreaView, Linking, Image, View, TouchableOpacity, ActivityIndicator, Text } from 'react-native';

import { Colors } from "../Themes";
import NormalHeader from "../Components/NormalHeader";

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SelectedTab: 0,
            initialPage: 1,
            matchList: [{ text: 'hello' }, { text: 'hello' }, { text: 'hello' }, { text: 'hello' }, { text: 'hello' }]
        }
    }

    componentDidMount() {
    }

    dialCall = () => {

        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = 'tel:+91 7042059800';
        }
        else {
            phoneNumber = 'telprompt:${+91 7042059800}';
        }

        Linking.openURL(phoneNumber);
    };

    render() {
        return (
            <View style={{ flex: 1, }}>
                <SafeAreaView style={{ backgroundColor: Colors.ember }} />
                <NormalHeader title="Contact US" navigation={this.props.navigation} />

                <View style={{ flex: 9 }}>
                    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                        <View style={{ backgroundColor: 'white', width: '90%', marginHorizontal: '5%', borderColor: 'gray', borderWidth: 1, borderRadius: 8, borderTopLeftRadius: 0, padding: 10, marginTop: 16 }}>
                            <Text style={{ color: Colors.charcoal, fontSize: 14 }}>Company Name</Text>
                            <Text style={{ color: Colors.charcoal, fontSize: 16, marginTop: 8, fontWeight: '600' }}>JustMyRoots</Text>
                            <Text style={{ color: Colors.charcoal, fontSize: 14, marginTop: 16 }}>Email</Text>
                            <Text style={{ color: Colors.charcoal, fontSize: 16, marginTop: 8, fontWeight: '600' }}>custSupport@justmyroots.com</Text>
                            <Text style={{ color: Colors.charcoal, fontSize: 14, marginTop: 16 }}>Contact Number</Text>
                            <Text style={{ color: Colors.charcoal, fontSize: 16, marginTop: 8, fontWeight: '600' }}>+91 7042059800/ +91 9831644600 </Text>
                            <Text style={{ color: Colors.charcoal, fontSize: 14, marginTop: 16 }}>Wish-A-Dish</Text>
                            <Text style={{ color: Colors.charcoal, fontSize: 16, marginTop: 8, fontWeight: '600' }}>wishadish@justmyroots.com</Text>
                            <Text style={{ color: Colors.charcoal, fontSize: 14, marginTop: 16 }}>We’d love to hear all about your experience, your feedback, and suggestions for JustMyRoots.</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
                    <TouchableOpacity style={{
                        justifyContent: 'center', backgroundColor: Colors.ember,
                        alignItems: 'center', flex: 1
                    }} onPress={() => { this.dialCall() }}>
                        <Text style={{ fontSize: 16, color: "white" }}>CALL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        justifyContent: 'center', backgroundColor: Colors.ember,
                        alignItems: 'center', flex: 1,
                        borderLeftWidth: 1,
                        borderColor: "white"
                    }} onPress={() => {
                        Linking.openURL('mailto:custSupport@justmyroots.com');
                    }}>
                        <Text style={{ fontSize: 16, color: "white" }}>EMAIL</Text>
                    </TouchableOpacity>
                </View>
            </View >

        );

    }

}


export default ContactUs
