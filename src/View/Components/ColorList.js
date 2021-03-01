import React from "react";
import ColorItem from "./ColorItem";
import withSpinner from "../HOC/withSpinner";

const ColorList = ({ items, colorClicked, product }) =>
  items.map(item => (
    <ColorItem
      item={item}
      key={item}
      colorClicked={colorClicked}
      product={product}
    />
  ));
export default withSpinner(ColorList);
