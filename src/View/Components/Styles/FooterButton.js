import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../Themes";
const styles = StyleSheet.create({
  footer: {
    backgroundColor: Colors.ember,
    justifyContent: "center"
    // height: 10
  },
  footerTouchable: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row"
  },
  addToCart: {
    color: "white",
    ...Fonts.style.h5,
    fontWeight: "bold"
  }
});

export default styles;
