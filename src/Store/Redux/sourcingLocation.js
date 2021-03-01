import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  sourcingLocationsRequest: ["parameters"],
  sourcingLocationsPending: null,
  sourcingLocationsSuccess: ["sourcingLocations"],
  sourcingLocationsFailure: null
});

export const SourcingLocationTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  sourcingLocations: [],
  fetching: false,
  error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const sourcingLocationsPending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const sourcingLocationsSuccess = (state, { sourcingLocations }) => ({
  ...state,
  sourcingLocations,
  fetching: false
});

// failed to get the avatar
export const sourcingLocationsFailure = state => ({
  ...state,
  sourcingLocations: [],
  error: true,
  fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SOURCING_LOCATIONS_PENDING]: sourcingLocationsPending,
  [Types.SOURCING_LOCATIONS_SUCCESS]: sourcingLocationsSuccess,
  [Types.SOURCING_LOCATIONS_FAILURE]: sourcingLocationsFailure
});
