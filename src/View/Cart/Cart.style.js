import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../Themes";
const styles = StyleSheet.create({
  productImage: {
    height: 300,
    flex: 1
  },
  productName: {
    padding: 10,
    fontWeight: "bold",
    fontSize: Fonts.size.regular
  },
  productDescription: {
    color: Colors.charcoal,
    fontSize: Fonts.size.medium,
    paddingLeft: 10,
    paddingRight: 10
  },
  listItem: {
    flex: 1,
    flexDirection: "column"
    // backgroundColor: "red"
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
  reviews: {
    flex: 1,
    color: Colors.ember,
    fontSize: Fonts.size.regular
  },
  city: {
    color: Colors.charcoal
  },
  ratingPositive: {
    color: Colors.leaf,
    fontSize: Fonts.size.regular
  },
  ratingNegative: {
    color: Colors.lightCharcoal,
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
  },
  footer: {
    backgroundColor: Colors.ember,
    justifyContent: "center",
    height: 10
  },
  footerTouchable: {
    justifyContent: "center"
  },
  addToCart: {
    color: "white",
    ...Fonts.style.h5,
    fontWeight: "bold"
  }
});

export default styles;
