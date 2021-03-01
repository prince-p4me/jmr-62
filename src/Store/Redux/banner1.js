import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  banners1Request: ["shoppingLocationId"],
  banners1Pending: null,
  banners1Success: ["banners"],
  banners1Failure: null
});

export const Banner1Types = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  banners: [],
  fetching: false,
  error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const banners1Pending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const banners1Success = (state, { banners }) => ({
  ...state,
  banners,
  fetching: false
});

// failed to get the avatar
export const banners1Failure = state => ({
  ...state,
  banners: [],
  error: true,
  fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BANNERS1_PENDING]: banners1Pending,
  [Types.BANNERS1_SUCCESS]: banners1Success,
  [Types.BANNERS1_FAILURE]: banners1Failure
});
