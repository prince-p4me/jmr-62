import React from "react";
import { Button, Text } from "native-base";
import styles from "./Styles/TextButton";

const TextButton = ({ title, onPress }) => (
  <Button transparent block onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </Button>
);

export default TextButton;
