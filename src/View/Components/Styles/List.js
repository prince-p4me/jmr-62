import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";
const styles = StyleSheet.create({
  image: {
    height: 150,
    width: Metrics.screenWidth / 2 - 10
  },
  productName: {
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
    marginTop: 10
  },
  filterCard: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 10,
    padding: 5,
    paddingRight: 15,
    paddingLeft: 15,
    borderColor: Colors.lightCharcoal,
    borderWidth: 1,
    borderRadius: 25
    // backgroundColor: "red"
  },
  cityText: {
    color: Colors.charcoal
  }
});

export default styles;
