import { put, call } from "redux-saga/effects";
import SourcingLocationActions from "../Redux/sourcingLocation";

export function* getSourcingLocations(api, action) {
  yield put(SourcingLocationActions.sourcingLocationsPending());
  const response = yield call(api.getSourcingLocations, action.parameters);

  if (response.ok) {
    yield put(SourcingLocationActions.sourcingLocationsSuccess(response.data));
  } else {
    yield put(SourcingLocationActions.sourcingLocationsFailure());
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
