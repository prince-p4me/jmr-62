import { takeLatest, all } from "redux-saga/effects";
import API from "../../Services/Api";
import FixtureAPI from "../../Services/FixtureApi";

/* ------------- Types ------------- */

import { CategoryTypes } from "../Redux/category";
import { SubCategoryTypes } from "../Redux/subCategory";
import { ProductTypes } from "../Redux/product";
import { BannerTypes } from "../Redux/banner";
import { Banner1Types } from "../Redux/banner1";
import { Banner2Types } from "../Redux/banner2";
import { RefferralTypes } from "../Redux/refferral";
import { CuisineTypes } from "../Redux/cuisine";
import { CommunityTypes } from "../Redux/community";
import { ShopTypes } from "../Redux/shop";
import { PincodeTypes } from '../Redux/pincode'
import { FtypeTypes } from '../Redux/foodPreference'
import { ShippingLocationTypes } from "../Redux/shippingLocation";
import { PickupLocationTypes } from "../Redux/pickupLocation";
import { SourcingLocationTypes } from "../Redux/sourcingLocation";
import { AuthenticationTypes } from "../Redux/authentication";
import { ProfileTypes } from "../Redux/profile";
import { CartTypes } from "../Redux/cart";
import { AddressTypes } from "../Redux/address";
import { OrderTypes } from "../Redux/order";
import { MyOrderTypes } from "../Redux/myOrder";
import { GeoTypes } from "../Redux/geo";
import { PackingTypes } from "../Redux/packing";
import { DfhTypes } from "../Redux/dfh";
import { OfferTypes } from "../Redux/offers";

/* ------------- Sagas ------------- */

import * as categorySagas from "./category";
import * as subCategorySagas from "./subCategory";
import * as productSagas from "./product";
import * as bannerSagas from "./banner";
import * as cuisineSagas from "./cuisine";
import * as communitySagas from "./community";
import * as shopSagas from "./shop";
import * as shippingLocationSagas from "./shippingLocation";
import * as pickupLocationSagas from "./pickupLocation";
import * as sourcingLocationSagas from "./sourcingLocation";
import * as authenticationSagas from "./authentication";
import * as profileSagas from "./profile";
import * as cartSagas from "./cart";
import * as addressSagas from "./address";
import * as orderSagas from "./order";
import * as myOrderSagas from "./myOrder";
import * as geoSagas from "./geo";
import * as packingSagas from "./packing";
import * as dfhSagas from "./dfh";
import * as refferralSagas from "./refferral";
import * as pincodeSagas from './pincode'
import * as ftypeSagas from './foodPreference'
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const DEBUG_MODE = false;
const api = DEBUG_MODE ? FixtureAPI : API.create();
// const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(
      CategoryTypes.CATEGORIES_REQUEST,
      categorySagas.getCategories,
      api
    ),
    takeLatest(
      SubCategoryTypes.SUB_CATEGORIES_REQUEST,
      subCategorySagas.getSubCategories,
      api
    ),
    takeLatest(ProductTypes.PRODUCTS_REQUEST, productSagas.getProducts, api),
    takeLatest(
      ProductTypes.PRODUCT_DETAIL_REQUEST,
      productSagas.getProductDetail,
      api
    ),
    takeLatest(RefferralTypes.REFFERRAL_REQUEST, refferralSagas.getRefferralData, api),
    takeLatest(OfferTypes.OFFERS_REQUEST, refferralSagas.getOffers, api),
    takeLatest(BannerTypes.BANNERS_REQUEST, bannerSagas.getBanners, api),
    takeLatest(Banner1Types.BANNERS1_REQUEST, bannerSagas.getBanners1, api),
    takeLatest(Banner2Types.BANNERS2_REQUEST, bannerSagas.getBanners2, api),
    takeLatest(CuisineTypes.CUISINES_REQUEST, cuisineSagas.getCuisines, api),
    takeLatest(
      CommunityTypes.COMMUNITIES_REQUEST,
      communitySagas.getCommunities,
      api
    ),
    takeLatest(ShopTypes.SHOPS_REQUEST, shopSagas.getShops, api),
    takeLatest(PincodeTypes.PINCODE_REQUEST, pincodeSagas.setPincode, api),
    takeLatest(FtypeTypes.FTYPE_REQUEST, ftypeSagas.setFtype, api),
    takeLatest(
      ShippingLocationTypes.SHIPPING_LOCATIONS_REQUEST,
      shippingLocationSagas.getShippingLocations,
      api
    ),
    takeLatest(
      PickupLocationTypes.PICKUP_LOCATIONS_REQUEST,
      pickupLocationSagas.getPickupLocations,
      api
    ),
    takeLatest(
      SourcingLocationTypes.SOURCING_LOCATIONS_REQUEST,
      sourcingLocationSagas.getSourcingLocations,
      api
    ),
    takeLatest(
      AuthenticationTypes.SEND_OTP_REQUEST,
      authenticationSagas.sendOtp,
      api
    ),
    takeLatest(
      AuthenticationTypes.VERIFY_MOBILE_REQUEST,
      authenticationSagas.verifyMobile,
      api
    ),
    takeLatest(
      AuthenticationTypes.REGISTER_PROFILE_REQUEST,
      authenticationSagas.registerProfile,
      api
    ),
    takeLatest(ProfileTypes.GET_PROFILE_REQUEST, profileSagas.getProfile, api),
    takeLatest(
      ProfileTypes.EDIT_PROFILE_REQUEST,
      profileSagas.editProfile,
      api
    ),
    takeLatest(
      CartTypes.EARLIEST_DELIVERY_REQUEST,
      cartSagas.getEarliestDelivery,
      api
    ),
    takeLatest(
      CartTypes.MIN_VALUE_DELIVERY_REQUEST,
      cartSagas.getMinValueDelivery,
      api
    ),
    takeLatest(
      CartTypes.DELIVERY_DATES_REQUEST,
      cartSagas.getDeliveryDates,
      api
    ),
    takeLatest(CartTypes.TIME_SLOTS_REQUEST, cartSagas.getTimeSlots, api),
    takeLatest(CartTypes.TIME_SLOTS_REQUEST, cartSagas.getTimeSlots, api),
    takeLatest(
      AddressTypes.SHIPPING_ADDRESS_REQUEST,
      addressSagas.getShippingAddresses,
      api
    ),
    takeLatest(
      AddressTypes.BILLING_ADDRESS_REQUEST,
      addressSagas.getBillingAddresses,
      api
    ),
    takeLatest(
      OrderTypes.ORDER_SUMMARY_REQUEST,
      orderSagas.getOrderSummary,
      api
    ),
    takeLatest(OrderTypes.CREATE_ORDER_REQUEST, orderSagas.createOrder, api),
    takeLatest(
      OrderTypes.CREATE_DFH_ORDER_REQUEST,
      orderSagas.createDfhOrder,
      api
    ),
    takeLatest(
      OrderTypes.PAYMENT_METHODS_REQUEST,
      orderSagas.getPaymentMethods,
      api
    ),
    takeLatest(MyOrderTypes.MY_ORDERS_REQUEST, myOrderSagas.getMyOrders, api),
    takeLatest(
      MyOrderTypes.ORDER_DETAIL_REQUEST,
      myOrderSagas.getOrderDetail,
      api
    ),
    takeLatest(
      MyOrderTypes.DFH_ORDER_DETAIL_REQUEST,
      myOrderSagas.getDfhOrderDetail,
      api
    ),
    takeLatest(
      ProfileTypes.LOYALTY_POINTS_REQUEST,
      profileSagas.getLoyaltyPoints,
      api
    ),
    takeLatest(GeoTypes.COUNTRIES_REQUEST, geoSagas.getCountries, api),
    takeLatest(GeoTypes.STATES_REQUEST, geoSagas.getStates, api),
    takeLatest(GeoTypes.CITIES_REQUEST, geoSagas.getCities, api),
    takeLatest(
      AddressTypes.CREATE_ADDRESS_REQUEST,
      addressSagas.createAddress,
      api
    ),
    takeLatest(
      ProductTypes.SEARCH_PRODUCTS_REQUEST,
      productSagas.searchProducts,
      api
    ),
    takeLatest(PackingTypes.BAG_TYPES_REQUEST, packingSagas.getBagTypes, api),
    takeLatest(
      PackingTypes.GIFTING_TYPES_REQUEST,
      packingSagas.getGiftingTypes,
      api
    ),
    takeLatest(
      DfhTypes.PACKAGING_TYPES_REQUEST,
      dfhSagas.getPackagingTypes,
      api
    ),
    takeLatest(
      DfhTypes.DFH_DELIVERY_CENTRES_REQUEST,
      dfhSagas.getDeliveryDfhCentres,
      api
    ),
    takeLatest(
      DfhTypes.DFH_PICKUP_CENTRES_REQUEST,
      dfhSagas.getPickupDfhCentres,
      api
    ),
    takeLatest(
      DfhTypes.DFH_DELIVERY_DATES_REQUEST,
      dfhSagas.getDfhDeliveryDates,
      api
    ),
    takeLatest(
      DfhTypes.DFH_DELIVERY_TIME_SLOTS_REQUEST,
      dfhSagas.getDfhDeliveryTimeSlots,
      api
    ),
    takeLatest(
      DfhTypes.DFH_PICKUP_DATES_REQUEST,
      dfhSagas.getDfhPickupDates,
      api
    ),
    takeLatest(
      DfhTypes.DFH_PICKUP_TIME_SLOTS_REQUEST,
      dfhSagas.getDfhPickupTimeSlots,
      api
    ),
    takeLatest(DfhTypes.CHECK_ZIP_CODE_REQUEST, dfhSagas.checkZipCode, api),
    takeLatest(DfhTypes.CHECK_MAX_WEIGHT_REQUEST, dfhSagas.checkMaxWeight, api),
    takeLatest(DfhTypes.DFH_SUMMARY_REQUEST, dfhSagas.getDfhSummary, api)
  ]);
}
