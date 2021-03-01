import React from "react";
import styles from "./Styles/ButtonFooter";
import { TouchableOpacity } from "react-native";
import { Text, Footer } from "native-base";

const ButtonFooter = ({ title, footerClicked }) => (
  <Footer style={styles.footer}>
    <TouchableOpacity
      style={styles.footerTouchable}
      onPress={() => footerClicked()}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </Footer>
);

export default ButtonFooter;
