import { put, call } from "redux-saga/effects";
import CuisineActions from "../Redux/cuisine";

export function* getCuisines(api, action) {
  const response = yield call(api.getCuisines, action.parameters);

  if (response.ok) {
    yield put(CuisineActions.cuisinesSuccess(response.data));
  } else {
    console.log("The error occured" + JSON.stringify(response));
    // yield put(GithubActions.userFailure())
  }
}
