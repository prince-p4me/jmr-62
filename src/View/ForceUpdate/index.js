import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Content, List, Toast } from "native-base";
import { Platform, Linking, View, Text, TouchableOpacity, BackHandler } from "react-native";
import LabelValueItem from "../Components/LabelValueItem";
import Constant from "../../Services/Constant";

// import Icon from "react-native-vector-icons/FontAwesome";
class ForceUpdateScreen extends Component {
    state = {
        androidUrl: "https://play.google.com/store/apps/details?id=com.cre8comm.app&hl=en",
        iosUrl: ""
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', function () {
            BackHandler.exitApp();
        })
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

    openStore = () => {
        let { androidUrl, iosUrl } = this.state;
        let url = Platform.OS == "android" ? androidUrl : iosUrl;
        Linking.openURL(url).then(() => {
            console.log("url opened");
            BackHandler.exitApp();
        }).catch(err => {
            console.error("Couldn't load page", err);
        });;
    }

    render() {
        const { category, pincode } = this.state;
        const { profile } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ width: '70%', textAlign: "center", color: 'black', }}>Please update your applicaiton otherwise it will stop working.</Text>
                <TouchableOpacity style={{
                    height: 60, width: '80%',
                    backgroundColor: 'rgb(161,31,34)', justifyContent: "center",
                    alignItems: 'center', marginTop: 20
                }}
                    onPress={() => this.openStore()}>
                    <Text style={{ color: 'white' }}>Update</Text>
                </TouchableOpacity>
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
export default connect(mapStateToProps, mapDispatchToProps)(ForceUpdateScreen);