import { put, call } from "redux-saga/effects";
import ProductActions from "../Redux/product";
import { DeviceEventEmitter } from "react-native";
import Constant from "../../Services/Constant";
export function* getProducts(api, action) {
  yield put(ProductActions.productsPending());
  const response = yield call(api.getProducts, action.parameters);
  console.log("getProducts", response);
  if (response.ok) {
    yield put(ProductActions.productsSuccess(response.data));
    // DeviceEventEmitter.emit(Constant.EMPTY_LIST, response.data);
  } else {
    DeviceEventEmitter.emit(Constant.EMPTY_LIST, response.data);
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* getProductDetail(api, action) {
  yield put(ProductActions.productDetailPending());

  const response = yield call(api.getProductDetail, action.parameters);

  if (response.ok) {
    yield put(ProductActions.productDetailSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* searchProducts(api, action) {
  yield put(ProductActions.searchProductsPending());

  const response = yield call(api.searchProducts, action.parameters);

  if (response.ok) {
    yield put(ProductActions.searchProductsSuccess(response.data));
  } else {
    console.log("The error occured");
    yield put(ProductActions.searchProductsFailure());
    // yield put(GithubActions.userFailure())
  }
}
