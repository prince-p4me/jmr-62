import React from "react";
import { Container, Button, Text, Content, View, Icon } from "native-base";
import { TouchableOpacity } from "react-native";
import { FlatList, Image } from "react-native";
import styles from "./Styles/Dfh.style";
import CustomHeader from "../Components/CustomHeader";

class DFh extends React.Component {

  static navigationOptions = {
    header: null
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <CustomHeader title="Ghar ka Khana" navigation={navigation} />

        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Icon style={styles.giftIcon} type="FontAwesome" name="gift" />
            <Text style={styles.explanation}>
              Deliverting the essence of Home Cooking
            </Text>
            <Text style={styles.explanation}>Direct From Home</Text>
            {/* <Text style={styles.explanation}>Coming Soon!!</Text> */}
            <Button
              block
              style={styles.startOrderText}
              onPress={() => navigation.navigate("DfhFrom")}
            >
              <Text>START ORDER</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

export default DFh;
