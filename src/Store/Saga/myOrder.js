import { put, call } from "redux-saga/effects";
import actions from "../Redux/myOrder";

export function* getMyOrders(api, action) {
  yield put(actions.myOrdersPending());
  const response = yield call(api.getMyOrders, action.parameters);
  if (response.ok) {
    yield put(actions.myOrdersSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* getOrderDetail(api, action) {
  yield put(actions.orderDetailPending());
  const response = yield call(api.getOrderDetail, action.parameters);
  if (response.ok) {
    yield put(actions.orderDetailSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* getDfhOrderDetail(api, action) {
  yield put(actions.orderDetailPending());
  const response = yield call(api.getDfhOrderDetail, action.parameters);
  if (response.ok) {
    yield put(actions.dfhOrderDetailSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
