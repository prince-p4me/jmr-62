import { put, call } from "redux-saga/effects";
import actions from "../Redux/packing";

export function* getBagTypes(api, action) {
  yield put(actions.bagTypesPending());
  const response = yield call(api.getBagTypes, action.shippingLocationId);
  if (response.ok) {
    yield put(actions.bagTypesSuccess(response.data));
  } else {
    yield put(actions.bagTypesFailure());
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* getGiftingTypes(api, action) {
  yield put(actions.giftingTypesPending());
  const response = yield call(api.getGiftingTypes, action.shippingLocationId);
  if (response.ok) {
    yield put(actions.giftingTypesSuccess(response.data));
  } else {
    yield put(actions.giftingTypesFailure());
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
