import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  categoriesRequest: ["parameters"],
  categoriesPending: null,
  categoriesSuccess: ["categories"],
  categoriesFailure: null
});

export const CategoryTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  categories: [],
  fetching: false,
  error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const categoriesPending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const categoriesSuccess = (state, { categories }) => ({
  ...state,
  categories,
  fetching: false
});

// failed to get the avatar
export const categoriesFailure = state => ({
  ...state,
  categories: [],
  error: true,
  fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORIES_PENDING]: categoriesPending,
  [Types.CATEGORIES_SUCCESS]: categoriesSuccess,
  [Types.CATEGORIES_FAILURE]: categoriesFailure
});
