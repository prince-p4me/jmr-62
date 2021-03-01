import React from "react";
import { Text, View } from "react-native";
import { Button } from "native-base";

const Test = ({ params }) => (
  <View
    style={{
      //   backgroundColor: "blue",
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <View
      style={{
        height: 200,
        flexDirection: "row",
        backgroundColor: "red",
        justifyContent: "space-around",
        marginBottom: 20
      }}
    >
      <Text>Login</Text>
      <Text>Sign Up</Text>
      <Text>Sign Up2</Text>
    </View>

    <Text>C</Text>
  </View>
);

export default Test;
