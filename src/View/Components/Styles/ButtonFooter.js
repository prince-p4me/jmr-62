import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";
const styles = StyleSheet.create({
  footer: {
    backgroundColor: Colors.ember,
    justifyContent: "center",
    height: 50
  },
  footerTouchable: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    ...Fonts.style.h5,
    fontWeight: "bold"
  }
});

export default styles;
