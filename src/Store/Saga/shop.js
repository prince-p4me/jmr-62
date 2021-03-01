import { put, call } from "redux-saga/effects";
import ShopActions from "../Redux/shop";

export function* getShops(api, action) {
  // yield put(CategoryActions.categoriesPending);
  const response = yield call(api.getShops, action.parameters);

  if (response.ok) {
    // const firstUser = path(['data', 'items'], response)[0]
    // const avatar = firstUser.avatar_url
    // // do data conversion here if needed
    yield put(ShopActions.shopsSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
