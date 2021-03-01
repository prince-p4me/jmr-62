import { put, call } from "redux-saga/effects";
import AuthenticationActions from "../Redux/authentication";
import { DeviceEventEmitter } from "react-native";
import Constant from "../../Services/Constant";

export function* sendOtp(api, action) {
  yield put(AuthenticationActions.sendOtpPending(action.parameters.mobile));

  const response = yield call(api.sendOtp, action.parameters);
  console.log("response", response);

  if (response.ok) {
    if (response.data.newUser) {
      yield put(AuthenticationActions.sendOtpFailure());
      DeviceEventEmitter.emit(Constant.OTP_SUCCESS, response.data);
    } else {
      yield put(AuthenticationActions.verifyMobilePending());
      yield put(AuthenticationActions.sendOtpSuccess(response.data));
      DeviceEventEmitter.emit(Constant.OTP_SUCCESS, response.data);
    }
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* verifyMobile(api, action) {
  yield put(AuthenticationActions.verifyMobilePending());
  const response = yield call(api.verifyMobile, action.parameters);

  if (response.ok) {
    yield put(AuthenticationActions.verifyMobileSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* registerProfile(api, action) {
  yield put(AuthenticationActions.registerProfilePending());
  const response = yield call(api.registerProfile, action.parameters);

  if (response.ok) {
    yield put(AuthenticationActions.registerProfileSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
