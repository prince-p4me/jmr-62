import React from "react";
import styles from "./ProductDetail.style";
import { TouchableOpacity } from "react-native";
import {
  Container,
  View,
  Text,
  Content,
  ListItem,
  Icon,
  Footer,
  Body
} from "native-base";
import { FlatList, Image } from "react-native";
import { Images } from "../Themes";
import ButtonFooter from "../Components/ButtonFooter";
import SetPreference from "../Components/SetPreference";
import ColorList from "../Components/ColorList";
import Label from "../Components/Label";
import CustomHeader from "../Components/CustomHeader";

const ProductDetail = ({
  product,
  incQty,
  decQty,
  addToCart,
  optionClicked,
  colorClicked, navigation
}) => (
  <Container>
    <CustomHeader title={"Product"}
      navigation={navigation} />
    {/* <CustomHeader */}
    <Content>
      <Image
        source={{ uri: product.images[0].image }}
        style={styles.productImage}
        defaultSource={Images.placeholder}
      />
      <ListItem>
        <Body>
          <Text style={styles.productName}>{product.name}</Text>
          <Text note>{product.unit}</Text>
        </Body>
      </ListItem>
      <Label text={"Shops"} />
      <FlatList
        data={product.shops}
        keyExtractor={item => item.productId}
        renderItem={({ item }) => (
          <ListItem style={styles.listItem}>
            <View style={styles.shopLine1}>
              <Text style={styles.shopName}>{item.shopName}</Text>
              <Text style={styles.city}>{item.city}</Text>
            </View>
            <View style={styles.shopLine2}>
              <Text style={styles.delivery}>
                Delivered in {item.estimatedDeliveryDays}
              </Text>
              {[1, 2, 3, 4, 5].map(n => (
                <Icon
                  type="FontAwesome"
                  style={
                    n > item.rating
                      ? styles.ratingNegative
                      : styles.ratingPositive
                  }
                  key={n}
                  name={n > item.rating ? "star" : "star"}
                />
              ))}
            </View>
            <View style={styles.shopLine3}>
              <Text style={styles.price}>Rs.{item.price}</Text>
              <Text style={styles.reviews}>{item.reviewCount} Reviews</Text>
              <View style={styles.quantitySection}>
                <TouchableOpacity
                  onPress={() => decQty(item)}
                  disabled={item.quantity == 0}
                >
                  <Icon
                    style={styles.iconMinus}
                    type="FontAwesome"
                    name="minus"
                  />
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => incQty(item)}>
                  <Icon
                    style={styles.iconPlus}
                    type="FontAwesome"
                    name="plus"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ListItem>
        )}
      />
      <ListItem>
        <Text style={styles.productDescription} numberOfLines={10}>
          {product.shortDescription}
        </Text>
      </ListItem>

      {product.options && product.options.length > 0 ? (
        <SetPreference
          options={product.options}
          optionClicked={optionClicked}
        />
      ) : null}
      {product.color && product.color.length > 0 ? (
        <ListItem style={styles.colorLine}>
          <Label text={"Select Color"} />
          <View style={styles.colorList}>
            <ColorList
              items={product.color}
              colorClicked={colorClicked}
              product={product}
            />
          </View>
        </ListItem>
      ) : null}

    </Content>

    <ButtonFooter title="ADD TO CART" footerClicked={addToCart} />
  </Container>
);

export default ProductDetail;
