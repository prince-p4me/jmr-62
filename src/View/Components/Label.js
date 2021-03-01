import React from "react";
import { Text } from "native-base";
import styles from "./Styles/Label";
const Label = ({ text, large }) => (
  <Text style={large ? styles.textLarge : styles.text}>{text}</Text>
);

export default Label;
