import React from "react";
import { Header, Body, Title } from "native-base";
import styles from "./Styles/HeaderWithTitle";
const HeaderWithTitle = ({ title }) => (
  <Header style={styles.header}>
    <Body>
      <Title style={styles.text}>{title}</Title>
    </Body>
  </Header>
);

export default HeaderWithTitle;
