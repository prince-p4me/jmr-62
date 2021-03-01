import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -100
  },
  explanation: {
    color: Colors.lightCharcoal,
    justifyContent: "flex-end",
    textAlign: "center"
  },
  touchableOpacity: {
    alignItems: "center"
  },
  startOrderText: {
    // ...Fonts.style.h6,
    backgroundColor: Colors.ember,
    // fontWeight: "bold",
    marginTop: 30
  },
  giftIcon: {
    fontSize: 200,
    color: Colors.lightCharcoal
    // backgroundColor: "green"
  }
});

export default styles;
