import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  shopsRequest: ["parameters"],
  shopsPending: null,
  shopsSuccess: ["shops"],
  shopsFailure: null
});

export const ShopTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  shops: [],
  fetching: false,
  error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const shopsPending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const shopsSuccess = (state, { shops }) => ({
  ...state,
  shops,
  fetching: false
});

// failed to get the avatar
export const shopsFailure = state => ({
  ...state,
  error: true,
  fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOPS_PENDING]: shopsPending,
  [Types.SHOPS_SUCCESS]: shopsSuccess,
  [Types.SHOPS_FAILURE]: shopsFailure
});
