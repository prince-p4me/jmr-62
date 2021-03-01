import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  banners2Request: ["shoppingLocationId"],
  banners2Pending: null,
  banners2Success: ["banners"],
  banners2Failure: null
});

export const Banner2Types = Types;
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
export const banners2Pending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const banners2Success = (state, { banners }) => ({
  ...state,
  banners,
  fetching: false
});

// failed to get the avatar
export const banners2Failure = state => ({
  ...state,
  banners: [],
  error: true,
  fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BANNERS2_PENDING]: banners2Pending,
  [Types.BANNERS2_SUCCESS]: banners2Success,
  [Types.BANNERS2_FAILURE]: banners2Failure
});
