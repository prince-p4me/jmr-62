import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  sendOtpRequest: ["parameters"],
  sendOtpPending: ["mobile"],
  sendOtpSuccess: ["otp"],
  sendOtpFailure: null,
  verifyMobileRequest: ["parameters"],
  verifyMobilePending: null,
  verifyMobileSuccess: ["response"],
  verifyMobileFailure: null,
  registerProfileRequest: ["parameters"],
  registerProfilePending: null,
  registerProfileSuccess: ["response"],
  registerProfileFailure: null,
  logout: null,
  resetLogin: null
});

export const AuthenticationTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  // token: "1c6b190f238b5584e934e37632c9534a",
  token: null,
  mobile: null,
  otpSent: false,
  verified: false,
  fetching: false,
  processed: false,
  error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const sendOtpPending = (state, { mobile }) => ({
  ...state,
  fetching: true,
  processed: false,
  mobile
});

// successful avatar lookup
export const sendOtpSuccess = state => ({
  ...state,
  otpSent: true,
  fetching: false,
  processed: true,
  verified: false,
  token: null,
  tempToken: null
});

// failed to get the avatar
export const sendOtpFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const verifyMobilePending = state => ({
  ...state,
  fetching: true,
  processed: false,
  token: null,
  tempToken: null,
  verified: false
});

// successful avatar lookup
export const verifyMobileSuccess = (state, { response }) => {
  return {
    ...state,
    verified: response.verified,
    token: response.token,
    tempToken: response.tempToken,
    fetching: false,
    processed: true,
  };
};

// failed to get the avatar
export const verifyMobileFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const registerProfilePending = state => ({
  ...state,
  fetching: true,
  processed: false,
  token: null,
  tempToken: null
});

// successful avatar lookup
export const registerProfileSuccess = (state, { response }) => {
  return {
    ...state,
    // token: response.token,
    fetching: false,
    processed: true,
    status: response.status,
    otp: response.otp
  };
};

// failed to get the avatar
export const registerProfileFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const logout = state => ({
  ...state,
  token: null
});
export const resetLogin = state => ({
  ...state,
  fetching: false,
  processed: false
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEND_OTP_PENDING]: sendOtpPending,
  [Types.SEND_OTP_SUCCESS]: sendOtpSuccess,
  [Types.SEND_OTP_FAILURE]: sendOtpFailure,
  [Types.VERIFY_MOBILE_PENDING]: verifyMobilePending,
  [Types.VERIFY_MOBILE_SUCCESS]: verifyMobileSuccess,
  [Types.VERIFY_MOBILE_FAILURE]: verifyMobileFailure,
  [Types.REGISTER_PROFILE_PENDING]: registerProfilePending,
  [Types.REGISTER_PROFILE_SUCCESS]: registerProfileSuccess,
  [Types.REGISTER_PROFILE_FAILURE]: registerProfileFailure,
  [Types.LOGOUT]: logout,
  [Types.RESET_LOGIN]: resetLogin
});
