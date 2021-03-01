import { put, call } from "redux-saga/effects";
import actions from "../Redux/geo";

export function* getCountries(api, action) {
  yield put(actions.countriesPending());
  const response = yield call(api.getCountries, action.parameters);

  if (response.ok) {
    yield put(actions.countriesSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* getStates(api, action) {
  yield put(actions.statesPending());
  const response = yield call(api.getStates, action.countryId);

  if (response.ok) {
    yield put(actions.statesSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* getCities(api, action) {
  yield put(actions.citiesPending());
  const response = yield call(api.getCities, action.stateId);

  if (response.ok) {
    yield put(actions.citiesSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
