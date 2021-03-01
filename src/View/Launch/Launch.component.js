import React from "react";
import { Container, Button, Text, Content, View } from "native-base";
import styles from "./Launch.style";

const Launch = ({ navigation }) => (
  <Container>
    <Content padder>
      <View style={styles.mainContainer}>
        <Text style={styles.locationText}>Your Delivery Location is</Text>
        <Text style={styles.locationName}>Jaipur</Text>
        <Button block onPress={() => navigation.navigate("TabNavigator")}>
          <Text>Continue</Text>
        </Button>
        <Button
          transparent
          block
          onPress={() => navigation.navigate("LocationChange")}
        >
          <Text>Change</Text>
        </Button>
      </View>
    </Content>
  </Container>
);

export default Launch;
