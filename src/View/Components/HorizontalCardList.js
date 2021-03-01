import React from "react";
import { Text, View } from "react-native";

const HorizontalCardList = ({ params }) => (
  <FlatList
    data={categories}
    horizontal
    keyExtractor={image => image.id}
    renderItem={({ item }) => (
      <Card style={styles.card}>
        <CardItem
          cardBody
          button
          onPress={() =>
            navigation.navigate("SubCategories", {
              type: Constants.SUB_CATEGORY,
              categoryId: item.id
            })
          }
        >
          <Image
            source={{
              uri: item.image
            }}
            style={styles.image}
          />
        </CardItem>
        <CardItem footer style={styles.cardFooter}>
          <Text style={styles.imageName}>{item.name.toUpperCase()}</Text>
        </CardItem>
      </Card>
    )}
  />
);

export default HorizontalCardList;
