import React from "react";
import { Image } from "react-native";
import styles from "./Styles/Banner";
import { Card, CardItem } from "native-base";
import { Images } from "../Themes";

const Banner = ({ item, bannerClicked, banner }) => (
  <Card>
    <CardItem cardBody button onPress={() => bannerClicked(item)}>
      {banner ? (
        <Image
          source={
            item.banner
              ? {
                  uri: item.banner
                }
              : Images.placeholder
          }
          defaultSource={Images.placeholder}
          style={styles.flatImage}
        />
      ) : (
        <Image
          source={{
            uri: item.url
          }}
          defaultSource={Images.placeholder}
          style={styles.bannerImage}
        />
      )}
    </CardItem>
  </Card>
);

export default Banner;
