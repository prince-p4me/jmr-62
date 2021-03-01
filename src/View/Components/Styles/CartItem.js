import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";
const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: "column"
    // backgroundColor: "green"
  },
  shopLine1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  shopLine2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10
    // backgroundColor: "green"
  },
  shopLine3: {
    paddingTop: 10,
    flexDirection: "row"
  },
  preferenceLine: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor: "red",
    width: "100%"
  },
  productName: {
    flex: 1,
    fontWeight: "bold",
    color: Colors.charcoal,
    fontSize: Fonts.size.regular
  },
  shopName: {
    flex: 1,
    color: Colors.charcoal,
    fontSize: Fonts.size.regular
  },
  delivery: {
    flex: 1,
    // fontWeight: "bold",
    color: Colors.bloodOrange,
    fontSize: Fonts.size.regular
  },

  price: {
    ...Fonts.style.h5,
    // fontWeight: "bold",
    color: Colors.charcoal
  },

  quantitySection: {
    flexDirection: "row",
    // backgroundColor: "pink",
    alignItems: "center"
  },
  iconPlus: {
    color: Colors.ember
  },
  iconMinus: {
    color: Colors.ember
  },
  quantity: {
    ...Fonts.style.h4,
    // fontWeight: "bold",
    color: Colors.charcoal,
    marginRight: 10,
    marginLeft: 10
    // backgroundColor: "blue"k
  }
});

export default styles;
