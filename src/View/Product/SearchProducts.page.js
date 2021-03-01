import React from "react";
import {
  Container,
  Content,
  Header,
  Item,
  Icon,
  Input,
  Button,
  Text
} from "native-base";
import { FlatList, ActivityIndicator } from "react-native";

import ImageCard from "../Components/ImageCard";
import LoadingIndicator from "../Components/LoadingIndicator";
import { Colors } from "../Themes";
const SearchProducts = ({
  closeSearch,
  searchProducts,
  products,
  itemClicked,
  fetching
}) => {
  return (
    <Container>
      <Header searchBar rounded style={{ backgroundColor: "white" }}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search Products" onChangeText={searchProducts} />
        </Item>
        <Button transparent block onPress={closeSearch}>
          <Text style={{ color: Colors.ember }}>Cancel</Text>
        </Button>
      </Header>
      <Content padder>
        {fetching ? <ActivityIndicator /> : null}
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ImageCard item={item} itemClicked={itemClicked} />
          )}
        />
      </Content>
    </Container>
  );
};

export default SearchProducts;
