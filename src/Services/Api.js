// a library to wrap and simplify api calls
import apisauce from "apisauce";
import Constant from "./Constant";
// our "constructor"
const create = (baseURL = Constant.API_URL) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      "Cache-Control": "no-cache"
    },
    // 10 second timeout...
    timeout: 10000
  });

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const getCategories = parameters => api.post("getCategories", parameters);
  const getSubCategories = parameters =>
    api.post("getSubCategories", parameters);
  const getProductDetail = parameters =>
    api.get(
      `getProductDetail/${parameters.shippingLocationId}/${parameters.productId
      }`
    );
  const checkZipCode = parameters =>
    api.get(
      `checkZipCode?location_id=${parameters.locationId}&zip=${parameters.zipCode
      }`
    );

  const getSourcingLocations = parameters =>
    api.post("getSourcingLocations", parameters);

  const getBanners = shippingLocationId =>
    api.get(`getBanners/${shippingLocationId}`);
  const getBanners1 = shippingLocationId =>
    api.get(`getBanners1/${shippingLocationId}`);
  const getBanners2 = shippingLocationId =>
    api.get(`getBanners2/${shippingLocationId}`);
  const getDfhCentres = locationId => api.get(`getDfhCentres/${locationId}`);
  const getShippingLocations = () => api.get("getShippingLocations");
  const getPickupLocations = () => api.get("getPickupLocations");
  const getPackagingTypes = () => api.get("getPackagingTypeDFH");
  const getProducts = parameters => api.post("getProducts", parameters);

  const getCommunities = parameters => api.post("getCommunities", parameters);
  const getCuisines = parameters => api.post("getCuisines", parameters);
  const getShops = parameters => api.post("getShops", parameters);
  const setPincode = parameters => api.post("setPincode", parameters)
  const setFtype = parameters => api.post("setFoodPref", parameters)
  const sendOtp = parameters => api.post("sendOTP", parameters);
  const getRefferralData = parameters => api.post("getReferralPage", parameters);
  const verifyMobile = parameters => api.post("verifyMobile", parameters);
  const registerProfile = parameters => api.post("registerOTP", parameters);
  const editProfile = parameters => api.post("editProfile", parameters);
  const getProfile = parameters => api.post("getProfile", parameters);
  const getEarliestDelivery = parameters =>
    api.post("getEarliestDeliveryDateTime", parameters);
  const getMinimumValueForDelivery = parameters =>
    api.post("getMinimumValueForDelivery", parameters);
  const getDeliveryDates = parameters =>
    api.post("getDeliveryDatesForLocation", parameters);
  const getDfhDeliveryDates = parameters =>
    api.post("getDfhDeliveryDate", parameters);
  const getDfhPickupDates = parameters =>
    api.post("getPickupDates", parameters);
  const getDfhDeliveryTimeSlots = parameters =>
    api.post("getDfhDeliveryTimeSlots", parameters);
  const getDfhPickupTimeSlots = parameters =>
    api.post("getDfhPickupTimeSlots", parameters);
  const getTimeSlots = parameters =>
    api.post("getTimeSlotsForDate", parameters);
  const getShippingAddresses = parameters =>
    api.post("getUserAddress", parameters);
  const getBillingAddresses = parameters =>
    api.post("getBillingAddresses", parameters);
  const getOffers = parameters => api.post("getOffers", parameters);
  const getOrderSummary = parameters => api.post("getOrderSummary", parameters);
  const getDfhSummary = parameters => api.post("getDfhSummary", parameters);
  const createOrder = parameters => api.post("createOrder", parameters);
  const createDfhOrder = parameters => api.post("createDFHOrder", parameters);
  const getPaymentMethods = parameters =>
    api.post("getPaymentType", parameters);
  const getMyOrders = parameters => api.post("myOrders", parameters);
  const getOrderDetail = parameters => api.post("getOrderDetails", parameters);
  const getDfhOrderDetail = parameters =>
    api.post("getDfhOrderDetail", parameters);
  const getLoyaltyPoints = token => api.get(`getLoyalityPoints?token=${token}`);
  const getCountries = () => api.get("getCountries");
  const getStates = countryId => api.get(`getStates?country_id=${countryId}`);
  const getCities = stateId => api.get(`getCities?state_id=${stateId}`);
  const createAddress = parameters => api.post("createAddress", parameters);
  const searchProducts = parameters => api.post("searchProducts", parameters);
  const checkMaxWeight = parameters => api.post("checkMaxWeight", parameters);
  const getBagTypes = shippingLocationId =>
    api.get(`getBagTypes/${shippingLocationId}`);
  const getGiftingTypes = shippingLocationId =>
    api.get(`getGiftingTypes/${shippingLocationId}`);
  // ------  vjb
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getOffers,
    getRefferralData,
    getCategories,
    getSubCategories,
    getProducts,
    getProductDetail,
    getBanners,
    getBanners1,
    getBanners2,
    getShippingLocations,
    getPickupLocations,
    getCommunities,
    getCuisines,
    getShops,
    getSourcingLocations,
    sendOtp,
    verifyMobile,
    registerProfile,
    getProfile,
    getEarliestDelivery,
    getMinimumValueForDelivery,
    getDeliveryDates,
    getTimeSlots,
    getShippingAddresses,
    getBillingAddresses,
    getOrderSummary,
    createOrder,
    getPaymentMethods,
    getMyOrders,
    getOrderDetail,
    getLoyaltyPoints,
    getCountries,
    getStates,
    getCities,
    createAddress,
    searchProducts,
    getBagTypes,
    getGiftingTypes,
    editProfile,
    getPackagingTypes,
    getDfhDeliveryDates,
    getDfhPickupDates,
    getDfhDeliveryTimeSlots,
    getDfhPickupTimeSlots,
    checkZipCode,
    getDfhCentres,
    getDfhSummary,
    createDfhOrder,
    getDfhOrderDetail,
    checkMaxWeight,
    setPincode,
    setFtype
  };
};

// let's return back our create method as the default.
export default {
  create
};
