import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  orderSummaryRequest: ["parameters"],
  orderSummaryPending: null,
  orderSummarySuccess: ["order"],
  orderSummaryFailure: null,
  paymentMethodsRequest: ["parameters"],
  paymentMethodsPending: null,
  paymentMethodsSuccess: ["paymentMethods"],
  paymentMethodsFailure: null,
  setPaymentMethod: ["paymentType"],
  createOrderRequest: ["parameters"],
  createOrderPending: null,
  createOrderSuccess: ["orderStatus"],
  createOrderFailure: null,
  createDfhOrderRequest: ["parameters"],
  createDfhOrderPending: null,
  createDfhOrderSuccess: ["orderStatus"],
  createDfhOrderFailure: null,
  setPaymentStatus: ["paymentStatus"],
  resetPaymentMethod: null,
  changeLoyaltyPointsStatus: null,
  setCouponCode: ["coupon"],
  resetOrder: null
});

export const OrderTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  // order: {
  //   sections: [
  //     {
  //       sourcingLocationName: "Kolkata",
  //       products: [
  //         {
  //           shopId: "2",
  //           shopName: "Delhi Tea",
  //           productId: "9",
  //           name: "Assam Tea",
  //           city: "Kolkata",
  //           price: "395.00",
  //           discount: "19.75",
  //           discountType: "percent",
  //           handlingCharges: "10",
  //           currentStock: "100",
  //           rating: "0",
  //           reviewCount: "0",
  //           quantity: "2",
  //           sourcingLocationId: "5",
  //           handling_charges: "10.00",
  //           tax: 18.7625,
  //           total_discount: "39.50",
  //           sub_total: "808.03"
  //         }
  //       ],
  //       sourcingLocationId: "5",
  //       deliveryDate: "29-12-2018",
  //       deliveryTime: "1PM - 3PM",
  //       sub_total: 808.03,
  //       total_items: 2,
  //       product_count: 1,
  //       discount: 39.5,
  //       tax: 18.7625,
  //       shipping_status: true,
  //       shipping: 0,
  //       shippingTax: 0
  //     },
  //     {
  //       sourcingLocationId: "1",
  //       sourcingLocationName: "Delhi Gurgaon Noida Ghaziabad",
  //       products: [
  //         {
  //           shopId: "3",
  //           shopName: "Delhi Tea",
  //           productId: "8",
  //           name: "Assam Tea",
  //           city: "Delhi Gurgaon Noida Ghaziabad",
  //           price: "276.00",
  //           discount: "13.80",
  //           discountType: "percent",
  //           handlingCharges: "10",
  //           currentStock: "100",
  //           rating: "0",
  //           reviewCount: "0",
  //           sourcingLocationId: "1",
  //           quantity: "1",
  //           handling_charges: "10.00",
  //           tax: 13.11,
  //           total_discount: "13.80",
  //           sub_total: "285.31"
  //         }
  //       ],
  //       deliveryDate: "26-12-2018",
  //       deliveryTime: "1PM - 3PM",
  //       sub_total: 285.31,
  //       total_items: 1,
  //       product_count: 1,
  //       discount: 13.8,
  //       tax: 13.11,
  //       shipping_status: true,
  //       shipping: 0,
  //       shippingTax: 0
  //     }
  //   ],
  //   shippingLocationId: "1",
  //   shippingAddressId: "1773",
  //   billingAddressId: "1772",
  //   coupon: "NEW5PER",
  //   userLoyaltyPoints: null,
  //   token: "1c6b190f238b5584e934e37632c9534a",
  //   userId: "806",
  //   total: 1093.34,
  //   total_tax: 31.8725
  // },
  order: null,
  paymentMethods: [],
  selectedPaymentMethod: null,
  fetching: false,
  error: false,
  orderId: null,
  useLoyaltyPoints: false
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */

// request the avatar for a user
export const orderSummaryPending = state => ({
  ...state,
  couponStatus: 0,
  orderId: null,
  fetching: true
});

// successful avatar lookup
export const orderSummarySuccess = (state, { order }) => {
  return {
    ...state,
    order: order.orderSummary.order,
    couponStatus: order.orderSummary.coupon_status,
    fetching: false
  };
};

// failed to get the avatar
export const orderSummaryFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const paymentMethodsPending = state => ({
  ...state,
  paymentMethods: [],
  orderId: null,
  fetching: true
});

// successful avatar lookup
export const paymentMethodsSuccess = (state, { paymentMethods }) => ({
  ...state,
  paymentMethods,
  fetching: false
});

// failed to get the avatar
export const paymentMethodsFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const setPaymentMethod = (state, { paymentType }) => ({
  ...state,
  paymentMethods: state.paymentMethods.map(paymentMethod =>
    paymentMethod.type == paymentType
      ? { ...paymentMethod, selected: true }
      : { ...paymentMethod, selected: false }
  ),
  selectedPaymentMethod: paymentType,
  fetching: false
});

export const createOrderPending = state => ({
  ...state,
  orderId: null,
  fetching: true
});

// successful avatar lookup
export const createOrderSuccess = (state, { orderStatus }) => ({
  ...state,
  orderId: orderStatus.orderId,
  fetching: false
});

// failed to get the avatar
export const createOrderFailure = state => ({
  ...state,
  orderId: null,
  error: true,
  fetching: false
});

export const createDfhOrderPending = state => ({
  ...state,
  orderId: null,
  fetching: true
});

// successful avatar lookup
export const createDfhOrderSuccess = (state, { orderStatus }) => ({
  ...state,
  orderId: orderStatus.orderCode,
  fetching: false
});

// failed to get the avatar
export const createDfhOrderFailure = state => ({
  ...state,
  orderId: null,
  error: true,
  fetching: false
});

export const setPaymentStatus = (state, { paymentStatus }) => ({
  ...state,
  paymentStatus: paymentStatus
});

export const resetPaymentMethod = state => ({
  ...state,
  paymentMethods: state.paymentMethods.map(paymentMethod => ({
    ...paymentMethod,
    selected: false
  })),
  selectedPaymentMethod: null
});

export const changeLoyaltyPointsStatus = state => ({
  ...state,
  useLoyaltyPoints: !state.useLoyaltyPoints
});

export const setCouponCode = (state, { coupon }) => ({
  ...state,
  coupon
});

export const resetOrder = state => ({
  ...state,
  orderId: null
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ORDER_SUMMARY_PENDING]: orderSummaryPending,
  [Types.ORDER_SUMMARY_SUCCESS]: orderSummarySuccess,
  [Types.ORDER_SUMMARY_FAILURE]: orderSummaryFailure,
  [Types.PAYMENT_METHODS_PENDING]: paymentMethodsPending,
  [Types.PAYMENT_METHODS_SUCCESS]: paymentMethodsSuccess,
  [Types.PAYMENT_METHODS_FAILURE]: paymentMethodsFailure,
  [Types.CREATE_ORDER_PENDING]: createOrderPending,
  [Types.CREATE_ORDER_SUCCESS]: createOrderSuccess,
  [Types.CREATE_ORDER_FAILURE]: createOrderFailure,
  [Types.CREATE_DFH_ORDER_PENDING]: createDfhOrderPending,
  [Types.CREATE_DFH_ORDER_SUCCESS]: createDfhOrderSuccess,
  [Types.CREATE_DFH_ORDER_FAILURE]: createDfhOrderFailure,
  [Types.SET_PAYMENT_METHOD]: setPaymentMethod,
  [Types.SET_PAYMENT_STATUS]: setPaymentStatus,
  [Types.RESET_PAYMENT_METHOD]: resetPaymentMethod,
  [Types.CHANGE_LOYALTY_POINTS_STATUS]: changeLoyaltyPointsStatus,
  [Types.SET_COUPON_CODE]: setCouponCode,
  [Types.RESET_ORDER]: resetOrder
});
