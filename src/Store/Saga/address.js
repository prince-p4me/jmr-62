import { put, call } from "redux-saga/effects";
import actions from "../Redux/address";

export function* getShippingAddresses(api, action) {
  yield put(actions.shippingAddressPending());
  const response = yield call(api.getShippingAddresses, action.parameters);

  if (response.ok) {
    yield put(actions.shippingAddressSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
export function* getBillingAddresses(api, action) {
  yield put(actions.billingAddressPending());
  const response = yield call(api.getBillingAddresses, action.parameters);

  if (response.ok) {
    yield put(actions.billingAddressSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* createAddress(api, action) {
  yield put(actions.createAddressPending());
  const response = yield call(api.createAddress, action.parameters);

  if (response.ok) {
    yield put(actions.createAddressSuccess());
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
