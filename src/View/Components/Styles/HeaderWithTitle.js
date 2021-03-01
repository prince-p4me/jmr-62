import { StyleSheet, Dimensions } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";

const styles = StyleSheet.create({
  text: {
    color: Colors.charcoal
  },
  header: {
    backgroundColor: Colors.snow
  },
  locationView: {
    borderWidth: 2, borderRadius: 10,
    width: "100%",
    borderColor: Colors.ember,
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: Dimensions.get("window").width - 20,
    marginHorizontal: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  vgBtn: {
    backgroundColor: Colors.charcoal,
    borderRadius: 7, paddingHorizontal: 9,
    paddingVertical: 4, minWidth: 70,
    marginHorizontal: 3
  },
  pincodeBOx: {
    width: 90,
    paddingHorizontal: 10,
    borderLeftWidth: 2,
    height: 30,
    paddingVertical: 5,
    borderColor: Colors.charcoal,
    // backgroundColor: "red",
    color: Colors.charcoal,
    fontSize: 14,
  },
  locationBtn: {
    flex: 1, flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 30
  }
});

export default styles;
