import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  offersRequest: ["parameters"],
  offersPending: null,
  offersSuccess: ["offers"],
  offersFailure: null
});

export const OfferTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  offers: [],
  fetching: false,
  error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const offersPending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const offersSuccess = (state, { offers }) => ({
  ...state,
  offers,
  fetching: false
});

// failed to get the avatar
export const offersFailure = state => ({
  ...state,
  offers: [],
  error: true,
  fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OFFERS_PENDING]: offersPending,
  [Types.OFFERS_SUCCESS]: offersSuccess,
  [Types.OFFERS_FAILURE]: offersFailure
});
