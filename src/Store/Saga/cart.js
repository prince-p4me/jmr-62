import { put, call } from "redux-saga/effects";
import actions from "../Redux/cart";

export function* getEarliestDelivery(api, action) {
  yield put(actions.earliestDeliveryPending());

  const response = yield call(api.getEarliestDelivery, action.parameters);

  if (response.ok) {
    yield put(actions.earliestDeliverySuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
export function* getMinValueDelivery(api, action) {
  yield put(actions.minValueDeliveryPending());

  const response = yield call(
    api.getMinimumValueForDelivery,
    action.parameters
  );

  if (response.ok) {
    yield put(actions.minValueDeliverySuccess(response.data));
  } else {
    console.log("The error occured");
    yield put(actions.minValueDeliveryFailure());

    // yield put(GithubActions.userFailure())
  }
}
export function* getDeliveryDates(api, action) {
  yield put(actions.deliveryDatesPending());

  const response = yield call(api.getDeliveryDates, action.parameters);

  if (response.ok) {
    yield put(actions.deliveryDatesSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
export function* getTimeSlots(api, action) {
  yield put(actions.timeSlotsPending());

  const response = yield call(api.getTimeSlots, action.parameters);

  if (response.ok) {
    yield put(actions.timeSlotsSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
