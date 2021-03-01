import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../Themes";
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    height: Metrics.screenHeight
  },
  locationText: {
    ...Fonts.style.h5,
    color: Colors.charcoal,
    textAlign: "center"
  },
  locationName: {
    ...Fonts.style.h4,
    textAlign: "center",
    marginBottom: 30
  }
});

export default styles;
