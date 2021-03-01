import React from "react";
import { Text, ListItem, Body, Right, Left, Icon } from "native-base";
import { Fonts, Metrics, Colors } from "../Themes";
import { TouchableOpacity } from "react-native";
import colors from "../Themes/Colors";

const MenuItem = ({ menu }) => (
  <ListItem onPress={menu.menuClicked} icon>
    <Left>
      <Icon
        style={{ color: Colors.charcoal }}
        type="FontAwesome"
        name={menu.icon}
      />
    </Left>
    <Body >
      <Text>{menu.title}</Text>
      {menu.subtitle && <TouchableOpacity activeOpacity={.7}
        style={{ flexDirection: "row", height: 40 }}
        onPress={() => alert("going to share")}>
        <Text style={{
          color: colors.ember,
          fontWeight: "600", fontSize: 18
        }}>JMR#01</Text>
        <Icon style={{ color: "black" }}
          type="MaterialIcons" name="content-copy" />
      </TouchableOpacity>}
    </Body>
    <Right>
      <Icon name="arrow-forward" />
    </Right>
  </ListItem>
);

export default MenuItem;
