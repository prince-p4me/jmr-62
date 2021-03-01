import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  pickupLocationsRequest: null,
  pickupLocationsPending: null,
  pickupLocationsSuccess: ["pickupLocations"],
  pickupLocationsFailure: null,
  setPickupLocation: ["pickupLocation"]
});

export const PickupLocationTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  pickupLocations: [],
  selectedPickupLocation: {},
  fetching: false,
  error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const pickupLocationsPending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const pickupLocationsSuccess = (state, { pickupLocations }) => ({
  ...state,
  pickupLocations,
  fetching: false
});

// failed to get the avatar
export const pickupLocationsFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const setpickupLocation = (state, { pickupLocation }) => ({
  ...state,
  selectedPickupLocation: pickupLocation
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PICKUP_LOCATIONS_PENDING]: pickupLocationsPending,
  [Types.PICKUP_LOCATIONS_SUCCESS]: pickupLocationsSuccess,
  [Types.PICKUP_LOCATIONS_FAILURE]: pickupLocationsFailure,
  [Types.SET_PICKUP_LOCATION]: setpickupLocation
});
