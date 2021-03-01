import React from "react";
import { FlatList } from "react-native";
import CentreCard from "./CentreCard";

const CentreList = ({ items, selectCentre }) => (
  <FlatList
    data={items}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <CentreCard centre={item} selectCentre={selectCentre} />
    )}
  />
);
// export default withSpinner(CentreList);
export default CentreList;
