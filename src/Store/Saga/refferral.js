import { put, call } from "redux-saga/effects";
import OffersActions from "../Redux/offers";
import RefferralActions from "../Redux/refferral";

export function* getRefferralData(api, action) {
  yield put(RefferralActions.refferralPending());
  const response = yield call(api.getRefferralData, action.parameters);

  if (response.ok) {
    // console.log("data found ", response.data);
    yield put(RefferralActions.refferralSuccess(response.data.data));
  } else {
    yield put(RefferralActions.refferralFailure());
  }
}

export function* getOffers(api, action) {
  yield put(OffersActions.offersPending());
  const response = yield call(api.getOffers, action.parameters);

  if (response.ok) {
    console.log("offers found ", response.data);
    yield put(OffersActions.offersSuccess(response.data.offers));
  } else {
    yield put(OffersActions.offersFailure());
    console.log("offers error ", response);
  }
}