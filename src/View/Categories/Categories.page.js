import React from "react";
import { Container, Content } from "native-base";
import BannerList from "../Components/BannerList";

const Categories = ({ categories, bannerClicked }) => {
  return (
    <Container>
      <Content>
        <BannerList
          items={categories}
          bannerClicked={bannerClicked}
          banner={true}
        />
      </Content>
    </Container>
  );
};

export default Categories;
