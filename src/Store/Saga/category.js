import { put, call } from "redux-saga/effects";
import CategoryActions from "../Redux/category";

export function* getCategories(api, action) {
  yield put(CategoryActions.categoriesPending());
  const response = yield call(api.getCategories, action.parameters);

  if (response.ok) {
    // const firstUser = path(['data', 'items'], response)[0]
    // const avatar = firstUser.avatar_url
    // // do data conversion here if needed
    yield put(CategoryActions.categoriesSuccess(response.data));
  } else {
    yield put(CategoryActions.categoriesFailure());
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
