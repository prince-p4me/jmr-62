import React from "react";
import {
  Container,
  Content,
  Button,
  Text,
  ListItem,
  Body,
  Right,
  Icon
} from "native-base";
import StepsIndicator from "./StepsIndicator.component";
import styles from "./Styles/DfhItems.style";
import { FlatList } from "react-native";
import { Colors } from "../Themes";
import CustomHeader from "../Components/CustomHeader";

const DfhItems = ({ navigation, items, addItem, goToNext, removeItem }) => (
  <Container>
    <CustomHeader navigation={navigation} title="Items" />
    <Content padder>
      <StepsIndicator currentPosition={2} />
      <Button block style={styles.nextButton} onPress={addItem}>
        <Text>ADD ITEM</Text>
      </Button>
      <FlatList
        data={items}
        keyExtractor={item => item.description}
        renderItem={({ item, index }) => (
          <ListItem>
            <Body>
              <Text>{item.description}</Text>
              <Text note>Qty: {item.quantity}</Text>
            </Body>
            <Right>
              <Text note>{item.packagingType.name}</Text>
              <Icon
                style={{ color: Colors.bloodOrange }}
                type="FontAwesome"
                name="remove"
                onPress={() => removeItem(index)}
              />
            </Right>
          </ListItem>
        )}
      />
      <Button block style={styles.nextButton} onPress={goToNext}>
        <Text>NEXT</Text>
      </Button>
    </Content>
  </Container>
);

export default DfhItems;
