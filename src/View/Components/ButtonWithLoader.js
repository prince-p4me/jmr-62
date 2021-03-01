import React from "react";
import { Button, Text, Spinner } from "native-base";
import styles from "./Styles/ButtonWithLoader";

const ButtonWithLoader = ({ fetching, title, onPress, transparent, item }) => (
  <Button
    block
    primary
    onPress={() => onPress(item)}
    style={transparent ? styles.buttonTransparent : styles.button}
    disabled={fetching}
  >
    <Text style={transparent ? styles.text : null}>{title}</Text>
    {fetching ? <Spinner /> : null}
  </Button>
);

export default ButtonWithLoader;
