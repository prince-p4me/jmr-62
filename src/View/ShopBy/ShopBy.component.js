import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { Container, Accordion, Content, Icon } from "native-base";
import { Images, Colors } from "../Themes";
import styles from "./ShopBy.style";
import Constants from "../../Services/Constant";

const ShopBy = ({ navigation, shippingLocations, communities, cuisines }) => {
  return (
    <Container>
      <View style={{ flex: 1, backgroundColor: Colors.charcoal }}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() =>
            navigation.navigate("ShopByOptions", {
              type: Constants.SOURCING_LOCATION
            })
          }
        >
          <Image source={Images.city} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() =>
            navigation.navigate("ShopByOptions", {
              type: Constants.COMMUNITY
            })
          }
        >
          <Image source={Images.community} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() =>
            navigation.navigate("ShopByOptions", {
              type: Constants.CUISINE
            })
          }
        >
          <Image source={Images.cuisine} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() =>
            navigation.navigate("ShopByOptions", {
              type: Constants.SHOP
            })
          }
        >
          <Image source={Images.shop} style={styles.image} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default ShopBy;
