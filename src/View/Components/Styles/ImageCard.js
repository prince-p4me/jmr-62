import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";
const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 150
  },
  name: {
    textAlign: "center",
    // margin: -5,
    // padding: 0,
    fontSize: 13
    // backgroundColor: "red"
  },
  priceRange: {
    textAlign: "center",
    // margin: -5,
    // padding: 0,
    fontSize: 13,
    color: Colors.charcoal
    // backgroundColor: "red"
  },
  cardFooter: {
    justifyContent: "center",
    flexDirection: "column"
    // padding: 0,
    // margin: 0
    // backgroundColor: "green"
  },
  card: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 10,
    width: Metrics.screenWidth / 2 - 10
  }
});

export default styles;
