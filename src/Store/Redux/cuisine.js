import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  cuisinesRequest: ["parameters"],
  cuisinesPending: null,
  cuisinesSuccess: ["cuisines"],
  cuisinesFailure: null
});

export const CuisineTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  cuisines: [],
  fetching: false,
  error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const cuisinesPending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const cuisinesSuccess = (state, { cuisines }) => ({
  ...state,
  cuisines,
  fetching: false
});

// failed to get the avatar
export const cuisinesFailure = state => ({
  ...state,
  error: true,
  fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CUISINES_PENDING]: cuisinesPending,
  [Types.CUISINES_SUCCESS]: cuisinesSuccess,
  [Types.CUISINES_FAILURE]: cuisinesFailure
});
