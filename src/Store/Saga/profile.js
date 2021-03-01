import { put, call } from "redux-saga/effects";
import ProfileActions from "../Redux/profile";

export function* getProfile(api, action) {
  const response = yield call(api.getProfile, action.parameters);
  console.log("getProfile", response);
  if (response.ok) {
    // console.log(JSON.stringify(response.data));
    yield put(ProfileActions.getProfileSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* editProfile(api, action) {
  yield put(ProfileActions.editProfilePending());
  const response = yield call(api.editProfile, action.parameters);
  if (response.ok) {
    yield put(ProfileActions.editProfileSuccess(response.data));
  } else {
    console.log("The error occured");
    yield put(ProfileActions.editProfileFailure());
    // yield put(GithubActions.userFailure())
  }
}

export function* getLoyaltyPoints(api, action) {
  yield put(ProfileActions.loyaltyPointsPending());
  const response = yield call(api.getLoyaltyPoints, action.parameters.token);
  if (response.ok) {
    yield put(ProfileActions.loyaltyPointsSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
