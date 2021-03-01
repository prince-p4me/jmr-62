import React from "react";
import {
  Container,
  Content,
  Icon,
  List,
  ListItem,
  Text,
  Right,
  Body,
  Left
} from "native-base";
import MenuItem from "../Components/MenuItem";
import CustomHeader from "../Components/CustomHeader";

const More = ({ token, menu, navigation }) => {
  return (
    <Container>
      <CustomHeader title="More " navigation={navigation} root={true} />
      <Content padder>
        <List>
          {token ? (
            <MenuItem menu={menu.profile} />
          ) : (
              <MenuItem menu={menu.login} />
            )}
          {token ? <MenuItem menu={menu.myOrders} /> : null}
          {token ? <MenuItem menu={menu.myRefferrals} /> : null}
          {token ? <MenuItem menu={menu.logout} /> : null}
        </List>
      </Content>
    </Container>
  );
};

export default More;
