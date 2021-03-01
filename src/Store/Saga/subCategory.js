import { put, call } from "redux-saga/effects";
import SubCategoryActions from "../Redux/subCategory";

export function* getSubCategories(api, action) {
  yield put(SubCategoryActions.subCategoriesPending());
  const response = yield call(api.getSubCategories, action.parameters);
  if (response.ok) {
    yield put(SubCategoryActions.subCategoriesSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
