import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

export default (reducers = combineReducers({
  category: require("./category").reducer,
  subCategory: require("./subCategory").reducer,
  product: require("./product").reducer,
  banner: require("./banner").reducer,
  banner1: require("./banner1").reducer,
  banner2: require("./banner2").reducer,
  refferral: require("./refferral").reducer,
  offers: require("./offers").reducer,
  shippingLocation: require("./shippingLocation").reducer,
  pickupLocation: require("./pickupLocation").reducer,
  dfh: require("./dfh").reducer,
  cuisine: require("./cuisine").reducer,
  community: require("./community").reducer,
  shop: require("./shop").reducer,
  sourcingLocation: require("./sourcingLocation").reducer,
  cart: require("./cart").reducer,
  authentication: require("./authentication").reducer,
  profile: require("./profile").reducer,
  address: require("./address").reducer,
  order: require("./order").reducer,
  myOrder: require("./myOrder").reducer,
  geo: require("./geo").reducer,
  packing: require("./packing").reducer,
  pincode: require("./pincode").reducer,
  ftype: require("./foodPreference").reducer,
  form: formReducer // <---- Mounted at 'form'
}));
