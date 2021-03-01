import { put, call } from "redux-saga/effects";
import actions from "../Redux/order";

export function* getOrderSummary(api, action) {
  yield put(actions.orderSummaryPending());
  const response = yield call(api.getOrderSummary, action.parameters);

  if (response.ok) {
    console.warn(response.data)
    yield put(actions.orderSummarySuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* createOrder(api, action) {
  yield put(actions.createOrderPending());
  const response = yield call(api.createOrder, action.parameters);

  if (response.ok) {
    yield put(actions.createOrderSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* getPaymentMethods(api, action) {
  yield put(actions.paymentMethodsPending());
  const response = yield call(api.getPaymentMethods, action.parameters);

  if (response.ok) {
    yield put(actions.paymentMethodsSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* createDfhOrder(api, action) {
  yield put(actions.createDfhOrderPending());

  const response = yield call(api.createDfhOrder, action.parameters);

  if (response.ok) {
    yield put(actions.createDfhOrderSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(actions.checkZipCodeFailure());
  }
}
