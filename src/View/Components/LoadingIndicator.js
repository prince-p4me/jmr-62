import React from "react";
import { Text, View } from "react-native";
import { ActivityIndicator } from "react-native";
import colors from "../Themes/Colors";
import styles from "./Styles/LoadingIndicator";

const LoadingIndicator = () => (
  <View style={styles.container}>
    <ActivityIndicator color={colors.ember}/>
  </View>
);

export default LoadingIndicator;
