import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  subCategoriesRequest: ["parameters"],
  subCategoriesPending: null,
  subCategoriesSuccess: ["subCategories"],
  subCategoriesFailure: null
});

export const SubCategoryTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  subCategories: [],
  fetching: false,
  error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const subCategoriesPending = state => ({
  ...state,
  subCategories: [],
  fetching: true
});

// successful avatar lookup
export const subCategoriesSuccess = (state, { subCategories }) => ({
  ...state,
  subCategories,
  fetching: false
});

// failed to get the avatar
export const subCategoriesFailure = state => ({
  ...state,
  error: true,
  fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SUB_CATEGORIES_PENDING]: subCategoriesPending,
  [Types.SUB_CATEGORIES_SUCCESS]: subCategoriesSuccess,
  [Types.SUB_CATEGORIES_FAILURE]: subCategoriesFailure
});
