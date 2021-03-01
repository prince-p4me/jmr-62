import React from "react";
import {
  Container,
  Left,
  Text,
  Content,
  Picker,
  Icon,
  Item,
  Label,
  Input,
  Form,
  Right,
  Button
} from "native-base";
import styles from "./Styles/DfhAddItem.style";
const DfhAddItem = ({ navigation }) => {
  return (
    <Container>
      <Content padder>
        <Form>
          <Item fixedLabel>
            <Label>Description</Label>
            <Input />
          </Item>
          <Item fixedLabel>
            <Label>Weight</Label>
            <Input />
          </Item>
          <Item picker>
            <Left>
              <Text style={styles.labelText}>Packaging Type</Text>
            </Left>
            <Right>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select"
                placeholderStyle={styles.placeHolderText}
                placeholderIconColor="#007aff"
              >
                <Picker.Item label="500 ml" value="key0" />
                <Picker.Item label="750 ml" value="key1" />
                <Picker.Item label="1000 ml" value="key2" />
              </Picker>
            </Right>
          </Item>
          <Item picker>
            <Left>
              <Text style={styles.labelText}>Number of Packs</Text>
            </Left>
            <Right>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select"
                placeholderStyle={styles.placeHolderText}
                placeholderIconColor="#007aff"
              >
                <Picker.Item label="1" value="key0" />
                <Picker.Item label="2" value="key1" />
                <Picker.Item label="3" value="key2" />
              </Picker>
            </Right>
          </Item>
        </Form>
        <Button
          block
          style={styles.nextButton}
          onPress={() => navigation.goBack()}
        >
          <Text>DONE</Text>
        </Button>
        <Button transparent block onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>CANCEL</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default DfhAddItem;
