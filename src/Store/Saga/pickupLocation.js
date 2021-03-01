import { put, call } from "redux-saga/effects";
import PickupLocationActions from "../Redux/pickupLocation";

export function* getPickupLocations(api) {
  const response = yield call(api.getPickupLocations);

  if (response.ok) {
    yield put(PickupLocationActions.pickupLocationsSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
