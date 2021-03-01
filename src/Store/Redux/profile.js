import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getProfileRequest: ["parameters"],
  getProfilePending: null,
  getProfileSuccess: ["profile"],
  getProfileFailure: null,
  loyaltyPointsRequest: ["parameters"],
  loyaltyPointsPending: null,
  loyaltyPointsSuccess: ["response"],
  loyaltyPointsFailure: null,
  editProfileRequest: ["parameters"],
  editProfilePending: null,
  editProfileSuccess: null,
  editProfileFailure: null
});

export const ProfileTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  profile: null,
  loyaltyPoints: 0,
  processed: false,
  fetching: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const getProfilePending = state => ({
  ...state,
  fetching: true,
  processed: false
});

// successful avatar lookup
export const getProfileSuccess = (state, { profile }) => ({
  ...state,
  profile,
  processed: true,
  fetching: false
});

// failed to get the avatar
export const getProfileFailure = state => ({
  ...state,
  error: true,
  processed: false,
  fetching: false
});

export const loyaltyPointsPending = state => ({
  ...state,
  loyaltyPoints: 0,
  fetching: true
});

// successful avatar lookup
export const loyaltyPointsSuccess = (state, { response }) => {
  return {
    ...state,
    loyaltyPoints: response.available,
    fetching: false
  };
};

// failed to get the avatar
export const loyaltyPointsFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const editProfilePending = state => ({
  ...state,
  fetching: true,
  processed: false
});

// successful avatar lookup
export const editProfileSuccess = state => ({
  ...state,
  fetching: false,
  processed: true
});

// failed to get the avatar
export const editProfileFailure = state => ({
  ...state,
  error: true,
  processed: false,
  fetching: false
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PROFILE_PENDING]: getProfilePending,
  [Types.GET_PROFILE_SUCCESS]: getProfileSuccess,
  [Types.GET_PROFILE_FAILURE]: getProfileFailure,
  [Types.LOYALTY_POINTS_PENDING]: loyaltyPointsPending,
  [Types.LOYALTY_POINTS_SUCCESS]: loyaltyPointsSuccess,
  [Types.LOYALTY_POINTS_FAILURE]: loyaltyPointsFailure,
  [Types.EDIT_PROFILE_PENDING]: editProfilePending,
  [Types.EDIT_PROFILE_SUCCESS]: editProfileSuccess,
  [Types.EDIT_PROFILE_FAILURE]: editProfileFailure
});
