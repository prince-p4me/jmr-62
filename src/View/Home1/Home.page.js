import React from "react";
import { Container, Content } from "native-base";
import DeliveryLocation from "../Components/DeliveryLocation";
import BannerList from "../Components/BannerList";
const Home = ({ banners, bannerClicked, location, locationClicked }) => {
  return (
    <Container>
      <Content>
        <DeliveryLocation
          location={location}
          locationClicked={locationClicked}
        />
        <BannerList items={banners} bannerClicked={bannerClicked} />
      </Content>
    </Container>
  );
};

export default Home;
