import { put, call } from "redux-saga/effects";
import ShippingLocationActions from "../Redux/shippingLocation";

export function* getShippingLocations(api) {
  const response = yield call(api.getShippingLocations);
  console.log("getShippingLocations", response)
  if (response.ok) {
    yield put(ShippingLocationActions.shippingLocationsSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
