import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";
const styles = StyleSheet.create({
  nextButton: {
    // ...Fonts.style.h6,
    backgroundColor: Colors.ember,
    // fontWeight: "bold",
    marginTop: 30
  },
  stepContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  oneStep: {
    alignItems: "center"
  },
  positiveIcon: {
    color: Colors.ember
  },
  positiveText: {
    color: Colors.ember
  },
  negativeIcon: {
    color: Colors.lightCharcoal
  },
  negativeText: {
    color: Colors.lightCharcoal
  }
});

export default styles;