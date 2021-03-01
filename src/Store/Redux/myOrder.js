import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  myOrdersRequest: ["parameters"],
  myOrdersPending: null,
  myOrdersSuccess: ["response"],
  myOrdersFailure: null,
  orderDetailRequest: ["parameters"],
  orderDetailPending: null,
  orderDetailSuccess: ["response"],
  orderDetailFailure: null,
  dfhOrderDetailRequest: ["parameters"],
  dfhOrderDetailSuccess: ["response"]
});

export const MyOrderTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  orders: [],
  order: null,
  fetching: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const myOrdersPending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const myOrdersSuccess = (state, { response }) => ({
  ...state,
  orders: response.orders,
  fetching: false
});

// failed to get the avatar
export const myOrdersFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

// request the avatar for a user
export const orderDetailPending = state => ({
  ...state,
  fetching: true,
  order: null
});

// successful avatar lookup
export const orderDetailSuccess = (state, { response }) => ({
  ...state,
  order: response.orders,
  fetching: false
});

export const dfhOrderDetailSuccess = (state, { response }) => ({
  ...state,
  order: response.order,
  fetching: false
});

// failed to get the avatar
export const orderDetailFailure = state => ({
  ...state,
  error: true,
  fetching: false
});
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MY_ORDERS_PENDING]: myOrdersPending,
  [Types.MY_ORDERS_SUCCESS]: myOrdersSuccess,
  [Types.MY_ORDERS_FAILURE]: myOrdersFailure,
  [Types.ORDER_DETAIL_PENDING]: orderDetailPending,
  [Types.ORDER_DETAIL_SUCCESS]: orderDetailSuccess,
  [Types.DFH_ORDER_DETAIL_SUCCESS]: dfhOrderDetailSuccess,
  [Types.ORDER_DETAIL_FAILURE]: orderDetailFailure
});
