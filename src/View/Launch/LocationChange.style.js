import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../Themes";
const styles = StyleSheet.create({
  buttonText: {
    color: "white"
  },
  locationName: {
    ...Fonts.style.h4,
    textAlign: "center",
    marginBottom: 30
  }
});

export default styles;
