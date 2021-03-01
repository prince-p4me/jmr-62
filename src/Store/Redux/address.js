import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  shippingAddressRequest: ["parameters"],
  shippingAddressPending: null,
  shippingAddressSuccess: ["shippingAddresses"],
  shippingAddressFailure: null,
  selectShippingAddress: ["addressId"],
  billingAddressRequest: ["parameters"],
  billingAddressPending: null,
  billingAddressSuccess: ["billingAddresses"],
  billingAddressFailure: null,
  selectBillingAddress: ["addressId"],
  createAddressRequest: ["parameters"],
  createAddressPending: null,
  createAddressSuccess: null,
  createAddressFailure: null
});

export const AddressTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  shippingAddresses: [],
  billingAddresses: [],
  shippingAddressId: null,
  billingAddressId: null,
  newAddressCreated: false,
  fetching: false,
  error: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const shippingAddressPending = state => ({
  ...state,
  newAddressCreated: false,
  shippingAddresses: [],
  fetching: true
});

// successful avatar lookup
export const shippingAddressSuccess = (state, { shippingAddresses }) => {
  shippingAddresses.length > 0 ? (shippingAddresses[0].selected = true) : false;
  return {
    ...state,
    shippingAddresses,
    shippingAddressId:
      shippingAddresses.length > 0 ? shippingAddresses[0].address_id : null,
    fetching: false
  };
};

// failed to get the avatar
export const shippingAddressFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const selectShippingAddress = (state, { addressId }) => ({
  ...state,
  shippingAddresses: state.shippingAddresses.map(address =>
    address.address_id === addressId
      ? { ...address, selected: true }
      : { ...address, selected: false }
  ),
  shippingAddressId: addressId,
  fetching: false
});

export const billingAddressPending = state => ({
  ...state,
  newAddressCreated: false,
  billingAddresses: [],
  fetching: true
});

// successful avatar lookup
export const billingAddressSuccess = (state, { billingAddresses }) => {
  billingAddresses.length > 0 ? (billingAddresses[0].selected = true) : false;
  return {
    ...state,
    billingAddresses,
    billingAddressId:
      billingAddresses.length > 0 ? billingAddresses[0].address_id : null,
    fetching: false
  };
};

// failed to get the avatar
export const billingAddressFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const selectBillingAddress = (state, { addressId }) => ({
  ...state,
  billingAddresses: state.billingAddresses.map(address =>
    address.address_id === addressId
      ? { ...address, selected: true }
      : { ...address, selected: false }
  ),
  billingAddressId: addressId,
  fetching: false
});

export const createAddressPending = state => ({
  ...state,
  newAddressCreated: false,
  fetching: true
});

// successful avatar lookup
export const createAddressSuccess = state => ({
  ...state,
  newAddressCreated: true,
  fetching: false
});

// failed to get the avatar
export const createAddressFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHIPPING_ADDRESS_PENDING]: shippingAddressPending,
  [Types.SHIPPING_ADDRESS_SUCCESS]: shippingAddressSuccess,
  [Types.SHIPPING_ADDRESS_FAILURE]: shippingAddressFailure,
  [Types.SELECT_SHIPPING_ADDRESS]: selectShippingAddress,
  [Types.BILLING_ADDRESS_PENDING]: billingAddressPending,
  [Types.BILLING_ADDRESS_SUCCESS]: billingAddressSuccess,
  [Types.BILLING_ADDRESS_FAILURE]: billingAddressFailure,
  [Types.SELECT_BILLING_ADDRESS]: selectBillingAddress,
  [Types.CREATE_ADDRESS_PENDING]: createAddressPending,
  [Types.CREATE_ADDRESS_SUCCESS]: createAddressSuccess,
  [Types.CREATE_ADDRESS_FAILURE]: createAddressFailure
});
