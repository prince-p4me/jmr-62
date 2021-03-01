import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: Colors.charcoal
  },
  textLarge: {
    textAlign: "center",
    color: Colors.charcoal,
    fontSize: Fonts.size.h3
  }
});

export default styles;
