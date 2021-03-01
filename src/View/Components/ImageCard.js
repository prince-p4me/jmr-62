import React from "react";
import { Text, Card, CardItem } from "native-base";
import { Image } from "react-native";
import styles from "./Styles/ImageCard";
import { Images } from "../Themes";

const ImageCard = ({ item, itemClicked }) => (
  <Card style={styles.card}>
    <CardItem cardBody button onPress={() => itemClicked(item)}>
      {item.image ? (
        <Image
          source={{
            uri: item.image
          }}
          defaultSource={Images.placeholder}
          style={styles.image}
        />
      ) : (
        <Image source={Images.placeholder} style={styles.image} />
      )}
    </CardItem>
    <CardItem footer style={styles.cardFooter}>
      <Text style={styles.name}>{item.name.toUpperCase()}</Text>
      {item.price ? <Text style={styles.priceRange}>{item.price}</Text> : null}
    </CardItem>
  </Card>
);

export default ImageCard;
