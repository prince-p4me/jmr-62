import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  shippingLocationsRequest: null,
  shippingLocationsPending: null,
  shippingLocationsSuccess: ["shippingLocations"],
  shippingLocationsFailure: null,
  setShippingLocationRequest: ["shippingLocation"],
  setShippingLocationSuccess: ["shippingLocation"]
});

export const ShippingLocationTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  shippingLocations: [],
  selectedShippingLocation: {},
  fetching: false,
  error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const shippingLocationsPending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const shippingLocationsSuccess = (state, { shippingLocations }) => ({
  ...state,
  shippingLocations,
  fetching: false
});

// failed to get the avatar
export const shippingLocationsFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const setShippingLocation = (state, { shippingLocation }) => ({
  ...state,
  selectedShippingLocation: shippingLocation
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHIPPING_LOCATIONS_PENDING]: shippingLocationsPending,
  [Types.SHIPPING_LOCATIONS_SUCCESS]: shippingLocationsSuccess,
  [Types.SHIPPING_LOCATIONS_FAILURE]: shippingLocationsFailure,
  [Types.SET_SHIPPING_LOCATION_REQUEST]: setShippingLocation
});
