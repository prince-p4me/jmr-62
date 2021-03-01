import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  bannersRequest: ["shoppingLocationId"],
  bannersPending: null,
  bannersSuccess: ["banners"],
  bannersFailure: null
});

export const BannerTypes = Types;
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
export const bannersPending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const bannersSuccess = (state, { banners }) => ({
  ...state,
  banners,
  fetching: false
});

// failed to get the avatar
export const bannersFailure = state => ({
  ...state,
  banners: [],
  error: true,
  fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BANNERS_PENDING]: bannersPending,
  [Types.BANNERS_SUCCESS]: bannersSuccess,
  [Types.BANNERS_FAILURE]: bannersFailure
});
