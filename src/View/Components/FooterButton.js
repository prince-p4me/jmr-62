import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, Footer, FooterTab } from "native-base";
import styles from "./Styles/FooterButton";
const FooterButton = ({ title, footerClicked, disabled }) => (
  <Footer>
    <FooterTab style={styles.footer}>
      <TouchableOpacity
        style={styles.footerTouchable}
        onPress={() => footerClicked()}
        disabled={disabled}
      >
        <Text style={styles.addToCart}>{title}</Text>
      </TouchableOpacity>
    </FooterTab>
  </Footer>
);

export default FooterButton;
