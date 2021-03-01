import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";
const styles = StyleSheet.create({
  nextButton: {
    // ...Fonts.style.h6,
    backgroundColor: Colors.ember,
    // fontWeight: "bold",
    marginTop: 30
  },
  addItemText: {
    color: Colors.ember,
    ...Fonts.style.h5
  }
});

export default styles;
