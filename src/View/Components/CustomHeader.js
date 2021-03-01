import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Body, Title, Icon, Left, Button, Right } from "native-base";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import styles from "./Styles/HeaderWithTitle";
import ReferralIcon from "./ReferralIcon";
import OffersIcon from "./OffersIcon";
import Colors from "../Themes/Colors";
import pincodeActions from './../../Store/Redux/pincode'
import ftypeActions from './../../Store/Redux/foodPreference'
// import Icon from "react-native-vector-icons/FontAwesome";
class CustomHeader extends Component {
  state = {
    category: this.props.ftype.ftype,
    pincode: ""
  }
  componentDidMount() {
    console.warn('food prefrence ')
    console.warn(this.props.ftype)
    this.setState({ pincode: this.props.pinCode.pincode })
  }
  setCategory = category => {
    console.warn(this.props.ftype)
    let data = {
      foodPref: category,
      token: this.props.token
    }
    this.props.ftypeRequest(data)
    this.setState({ category });

  }
  setPincode = (text) => {
    console.warn('i am here')
    if (text.length == 6) {
      console.warn('condition approved')
      let data = {
        pincode: text,
        shippingLocationId: this.props.location.id,
        token: this.props.token
      }
      this.props.pincodeRequest(data)
      this.setState({ pincode: text })
    }
    else {
      console.warn('condition false')
      this.setState({ pincode: text })
    }
  }
  render() {
    const { category, pincode } = this.state;
    const { title, root, navigation, token, location } = this.props;
    return (
      <View style={{ paddingBottom: 10 }}>
        <Header style={styles.header} noShadow noLeft={root}>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon type="MaterialIcons" style={{ color: Colors.ember }} name="keyboard-backspace" />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontSize: 18, color: Colors.ember }}>{title}</Title>
          </Body>
          <Right>
            <ReferralIcon token={token} navigation={navigation} />
            <OffersIcon token={token} navigation={navigation} />
          </Right>
        </Header>
        <View activeOpacity={.8} style={styles.locationView}>
          <TouchableOpacity style={styles.locationBtn} onPress={() => {
            navigation.navigate("LaunchNavigator");
          }}>
            <Title style={{ fontSize: 14, color: Colors.ember, marginEnd: 4 }}>Delivery@</Title>
            <Title style={{ fontSize: 14, color: Colors.charcoal }}>{location?.name}</Title>
            <Icon type="FontAwesome" style={{
              color: Colors.charcoal,
              position: "absolute", top: -10, right: 10
            }} name="sort-down" />
          </TouchableOpacity>
          {/* <TextInput style={styles.pincodeBOx}
            placeholder="Pin Code"
            placeholderTextColor={Colors.charcoal}
            value={pincode}
            onChangeText={pincode => this.setPincode(pincode)}
            maxLength={8}
            keyboardType="numeric"
            returnKeyLabel="Done"
            returnKeyType="done"></TextInput> */}
          <TouchableOpacity activeOpacity={.8} style={[styles.vgBtn, {
            backgroundColor: category == "Veg" ? Colors.leaf : Colors.charcoal
          }]} onPress={() => this.setCategory("Veg")}>
            <Title style={{ fontSize: 14, color: Colors.text }}>Veg</Title>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.8} style={[styles.vgBtn, {
            backgroundColor: category == "Non-Veg" ? Colors.ember : Colors.charcoal
          }]} onPress={() => this.setCategory("Non-Veg")}>
            <Title style={{ fontSize: 14, color: Colors.text }}>Non-Veg</Title>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
// const CustomHeader = ({ title, root, navigation, token, location }) => {
//   // console.warn("token is:--" + token);
//   const [category, setCategory] = useState("");


// };

const mapStateToProps = ({ authentication, shippingLocation, pincode, ftype }) => ({
  token: authentication.token,
  location: shippingLocation.selectedShippingLocation,
  pinCode: pincode,
  ftype: ftype
});
const mapDispatchToProps = { ...pincodeActions, ...ftypeActions }
export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);