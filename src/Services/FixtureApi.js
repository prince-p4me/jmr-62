const getData = () => {
  return {
    ok: true,
    data: require("../Fixtures/data.json")
  };
};

export default {
  // Functions return fixtures
  getSubCategories: getData,
  getProducts: getData,
  getShippingLocations: getData,
  getCuisines: getData,
  getShops: getData,
  getCommunities: getData,
  //   getCategories: getData,
  getCategories: () => ({
    ok: true,
    data: require("../Fixtures/category.json")
  }),
  getSourcingLocations: () => ({
    ok: true,
    data: require("../Fixtures/location.json")
  }),
  getProductDetail: () => ({
    ok: true,
    data: require("../Fixtures/product.json")
  }),
  getBanners: () => ({
    ok: true,
    data: require("../Fixtures/banner.json")
  }),
  sendOtp: () => ({
    ok: true,
    data: { success: true }
  }),
  verifyMobile: () => ({
    ok: true,
    data: { verified: true, tempToken: "268912d9b42cbf323290b2da0d8fbe6a" }
  }),
  registerProfile: () => ({
    ok: true,
    data: { token: "268912d9b42cbf323290b2da0d8fbe6a" }
  }),
  getProfile: () => ({
    ok: true,
    data: {
      firstName: "Praveenn",
      lastName: "Sahuu",
      email: "praveenn@gmail.com",
      dob: "1940-02-12",
      anniversary: "1950-02-12",
      mobile: "8527708881"
    }
  })
};
