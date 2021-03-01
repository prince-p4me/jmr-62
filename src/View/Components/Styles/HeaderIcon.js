import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";
const styles = StyleSheet.create({
  badge: {
    backgroundColor: Colors.ember,
    marginLeft: -20,
    marginRight: 5
  },
  icon: {
    marginRight: 10,
    color: Colors.ember
  },
  text: {
    fontSize: Fonts.size.medium,
    fontWeight: "bold",
    color: Colors.snow
  }
});

export default styles;
