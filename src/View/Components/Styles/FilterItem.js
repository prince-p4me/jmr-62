import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";
const styles = StyleSheet.create({
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
  selectedFilterCard: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 10,
    padding: 5,
    paddingRight: 15,
    paddingLeft: 15,
    borderColor: Colors.ember,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: Colors.ember
  },
  selectedText: {
    color: Colors.snow
  }
});

export default styles;
