import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";
const styles = StyleSheet.create({
  pickUpText: {
    // ...Fonts.style.h6,
    backgroundColor: Colors.ember,
    // fontWeight: "bold",
    marginTop: 30
  },
  deliveryTimeItem: {
    paddingLeft: 15
  },
  deliveryTimeText: {
    color: Colors.charcoal,
    fontSize: Fonts.size.regular
  },
  labelText: {
    color: Colors.charcoal
  }
});

export default styles;
