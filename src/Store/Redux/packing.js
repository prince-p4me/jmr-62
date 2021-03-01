import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  bagTypesRequest: ["shippingLocationId"],
  bagTypesPending: null,
  bagTypesSuccess: ["bagTypes"],
  bagTypesFailure: null,
  giftingTypesRequest: ["shippingLocationId"],
  giftingTypesPending: null,
  giftingTypesSuccess: ["giftingTypes"],
  giftingTypesFailure: null
});

export const PackingTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  bagTypes: [],
  giftingTypes: [],
  fetching: false,
  error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const bagTypesPending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const bagTypesSuccess = (state, { bagTypes }) => ({
  ...state,
  bagTypes,
  fetching: false
});

// failed to get the avatar
export const bagTypesFailure = state => ({
  ...state,
  bagTypes: [],
  error: true,
  fetching: false
});

export const giftingTypesPending = state => ({ ...state, fetching: true });

export const giftingTypesSuccess = (state, { giftingTypes }) => ({
  ...state,
  giftingTypes,
  fetching: false
});

export const giftingTypesFailure = state => ({
  ...state,
  giftingTypes: [],
  error: true,
  fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BAG_TYPES_PENDING]: bagTypesPending,
  [Types.BAG_TYPES_SUCCESS]: bagTypesSuccess,
  [Types.BAG_TYPES_FAILURE]: bagTypesFailure,
  [Types.GIFTING_TYPES_PENDING]: giftingTypesPending,
  [Types.GIFTING_TYPES_SUCCESS]: giftingTypesSuccess,
  [Types.GIFTING_TYPES_FAILURE]: giftingTypesFailure
});
