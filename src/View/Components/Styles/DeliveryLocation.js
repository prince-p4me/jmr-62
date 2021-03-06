import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";
const styles = StyleSheet.create({
  view: {
    // margin: 15,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // marginLeft: 5,
    // marginTop: 10,
    // padding: 5,
    // paddingRight: 15,
    // paddingLeft: 15,
    // borderColor: Colors.lightCharcoal,
    // borderWidth: 1,
    // borderRadius: 25
    // backgroundColor: "red"
  },
  text: {
    // textAlign: "center",
    color: Colors.charcoal
    // marginLeft: 5,
    // marginTop: 10,
    // padding: 5,
    // paddingRight: 15,
    // paddingLeft: 15,
    // borderColor: Colors.ember,
    // borderWidth: 1,
    // borderRadius: 25,
    // backgroundColor: Colors.ember
  },
  locationText: {
    color: Colors.ember,
    fontSize: 15
  },
  locationIcon: {
    color: Colors.ember,
    fontSize: 18
  }
});

export default styles;
