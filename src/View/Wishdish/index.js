import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Content, List, Toast } from "native-base";
import { ActivityIndicator, TextInput, View, Text, TouchableOpacity } from "react-native";
import LabelValueItem from "../Components/LabelValueItem";
import Constant from "./../../Services/Constant";

// import Icon from "react-native-vector-icons/FontAwesome";
class WishDishScreen extends Component {
    state = {
        category: "",
        pincode: "",
        dish: "",
        email: "",
        name: ""
    }
    submitPreference = async () => {
        let response = await fetch(Constant.API_URL + 'wishADish', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                dish: this.state.dish
            })
        });
        this.props.navigation.goBack()
        Toast.show({
            text: "Wish a dish submitted successfuly",
            buttonText: "Okay",
            duration: 3000
        });
    }
    render() {
        const { category, pincode } = this.state;
        const { profile } = this.props;
        return (
            <View style={{ flex: 1, }}>
                <List>
                    <View style={{ marginLeft: '5%' }}>
                        <View style={{ marginLeft: '2%' }}>
                            <Text style={{ color: 'black', marginTop: 10 }}>Name</Text>
                            <TextInput placeholder="Enter Name " value={this.state.name} onChangeText={(text) => { this.setState({ name: text }) }} />
                        </View>
                        <View style={{ height: 0.3, width: '100%', backgroundColor: 'rgba(0,0,0,0.1)' }} />
                    </View>
                    <View style={{ marginLeft: '5%' }}>
                        <View style={{ marginLeft: '2%' }}>
                            <Text style={{ color: 'black', marginTop: 10 }}>Email</Text>
                            <TextInput placeholder="Enter Email " value={this.state.email} onChangeText={(text) => { this.setState({ email: text }) }} />
                        </View>
                        <View style={{ height: 0.3, width: '100%', backgroundColor: 'rgba(0,0,0,0.1)' }} />
                    </View>
                    <View style={{ marginLeft: '5%' }}>
                        <View style={{ marginLeft: '2%' }}>
                            <Text style={{ color: 'black', marginTop: 10 }}>Dish</Text>
                            <TextInput placeholder="Add Dish Name " value={this.state.dish} onChangeText={(text) => { this.setState({ dish: text }) }} />
                        </View>
                        <View style={{ height: 0.3, width: '100%', backgroundColor: 'rgba(0,0,0,0.1)' }} />
                    </View>
                    <TouchableOpacity style={{ width: "90%", marginHorizontal: "5%", height: 60, backgroundColor: "rgb(161,31,34)", marginTop: 20, justifyContent: 'center', alignItems: 'center' }} onPress={() => { this.submitPreference() }}>
                        <Text style={{ fontSize: 18, fontWeight: '300', color: "white" }}>Wish A Dish</Text>
                    </TouchableOpacity>
                </List>
            </View>
        )
    }
}
// const CustomHeader = ({ title, root, navigation, token, location }) => {
//   // console.warn("token is:--" + token);
//   const [category, setCategory] = useState("");


// };

const mapStateToProps = ({ authentication }) => ({
    token: authentication.token
});
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(WishDishScreen);