import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  refferralRequest: ["parameters"],
  refferralPending: null,
  refferralSuccess: ["refferral"],
  refferralFailure: null
});

export const RefferralTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  refferral: {},
  fetching: false,
  error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const refferralPending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const refferralSuccess = (state, { refferral }) => ({
  ...state,
  refferral,
  fetching: false
});

// failed to get the avatar
export const refferralFailure = state => ({
  ...state,
  refferral: {},
  error: true,
  fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REFFERRAL_PENDING]: refferralPending,
  [Types.REFFERRAL_SUCCESS]: refferralSuccess,
  [Types.REFFERRAL_FAILURE]: refferralFailure
});
