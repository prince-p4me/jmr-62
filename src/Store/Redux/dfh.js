import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setDeliveryLocation: ["deliveryLocation"],
  packagingTypesRequest: null,
  packagingTypesPending: null,
  packagingTypesSuccess: ["packagingTypes"],
  packagingTypesFailure: null,
  addItem: ["item"],
  dfhDeliveryDatesRequest: ["parameters"],
  dfhPickupDatesRequest: ["parameters"],
  dfhDatesPending: null,
  dfhDatesSuccess: ["dates"],
  dfhDatesFailure: null,
  setDfhDeliveryDate: ["date"],
  setDfhPickupDate: ["date"],
  dfhDeliveryTimeSlotsRequest: ["parameters"],
  dfhPickupTimeSlotsRequest: ["parameters"],
  dfhTimeSlotsPending: null,
  dfhTimeSlotsSuccess: ["timeSlots"],
  dfhTimeSlotsFailure: null,
  setDeliveryTimeSlot: ["time"],
  setPickupTimeSlot: ["time"],
  changeHomeDeliveryStatus: null,
  changeHomePickupStatus: null,
  checkZipCodeRequest: ["parameters"],
  checkZipCodePending: null,
  checkZipCodeSuccess: null,
  checkZipCodeFailure: null,
  dfhReset: null,
  dfhDeliveryCentresRequest: ["locationId"],
  dfhPickupCentresRequest: ["locationId"],
  dfhDeliveryCentresPending: null,
  dfhPickupCentresPending: null,
  dfhDeliveryCentresSuccess: ["dfhCentres"],
  dfhPickupCentresSuccess: ["dfhCentres"],
  dfhCentresFailure: null,
  dfhCentresRequest: ["locationId"],
  dfhCentresPending: null,
  dfhCentresSuccess: ["dfhCentres"],
  dfhCentresFailure: null,
  setDfhFromLocation: ["locationId"],
  setDfhFromAddress: ["address"],
  setDfhToLocation: ["locationId"],
  setDfhToAddress: ["address"],
  setPickupDfhCentre: ["centre"],
  setDeliveryDfhCentre: ["centre"],
  dfhSummaryRequest: ["parameters"],
  dfhSummaryPending: null,
  dfhSummarySuccess: ["orderSummary"],
  dfhSummaryFailure: null,
  checkMaxWeightRequest: ["parameters"],
  checkMaxWeightPending: null,
  checkMaxWeightSuccess: ["response"],
  checkMaxWeightFailure: null,
  removeItem: ["index"],
  resetWeightCheck: null
});

export const DfhTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  selectedDeliveryLocation: {},
  packagingTypes: [],
  items: [],
  from: {},
  to: {},
  delivery: { needed: true },
  pickUp: { needed: true },
  dates: [],
  timeSlots: [],
  fetching: false,
  error: false,
  processed: false,
  dfhDeliveryCentres: [],
  dfhPickupCentres: [],
  orderSummary: {},
  weightCheck: {}
};

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// };

/* ------------- Reducers ------------- */
export const packagingTypesPending = state => ({ ...state, fetching: true });

// successful avatar lookup
export const packagingTypesSuccess = (state, { packagingTypes }) => ({
  ...state,
  packagingTypes,
  fetching: false
});

// failed to get the avatar
export const packagingTypesFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const dfhSummarySuccess = (state, { orderSummary }) => ({
  ...state,
  orderSummary
});

export const dfhSummaryPending = state => ({ ...state, fetching: true });

export const dfhSummaryFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const dfhDeliveryCentresPending = state => ({
  ...state,
  dfhDeliveryCentres: [],
  delivery: { needed: true }
});
export const dfhPickupCentresPending = state => ({
  ...state,
  dfhPickupCentres: [],
  pickUp: { needed: true }
});

// successful avatar lookup
export const dfhDeliveryCentresSuccess = (state, { dfhCentres }) => ({
  ...state,
  dfhDeliveryCentres: dfhCentres,
  fetching: false
});

export const dfhPickupCentresSuccess = (state, { dfhCentres }) => ({
  ...state,
  dfhPickupCentres: dfhCentres,
  fetching: false
});

// failed to get the avatar
export const dfhCentresFailure = state => ({
  ...state,
  error: true,
  fetching: false
});
export const setDeliveryLocation = (state, { deliveryLocation }) => ({
  ...state,
  selectedDeliveryLocation: deliveryLocation,
  processed: false
});

export const addItem = (state, { item }) => ({
  ...state,
  items: [...state.items, item]
});
/* ------------- Hookup Reducers To Types ------------- */
export const dfhDatesPending = state => ({
  ...state,
  dates: []
});

// successful avatar lookup
export const dfhDatesSuccess = (state, { dates }) => ({
  ...state,
  dates: dates
});

// failed to get the avatar
export const dfhDatesFailure = state => ({
  ...state,
  error: true
});

export const setDfhDeliveryDate = (state, { date }) => ({
  ...state,
  delivery: { ...state.delivery, date, time: null },
  pickUp: { ...state.pickUp, date: null, time: null }
});
export const setDfhPickupDate = (state, { date }) => ({
  ...state,
  pickUp: { ...state.pickUp, date, time: null }
});

export const dfhTimeSlotsPending = state => ({
  ...state,
  timeSlots: []
});

// successful avatar lookup
export const dfhTimeSlotsSuccess = (state, { timeSlots }) => ({
  ...state,
  timeSlots: timeSlots
});

// failed to get the avatar
export const dfhTimeSlotsFailure = state => ({
  ...state,
  error: true
});

export const emptyCart = state => ({
  ...state,
  sections: []
});

export const setDeliveryTimeSlot = (state, { time }) => ({
  ...state,
  delivery: { ...state.delivery, time },
  pickUp: { ...state.pickUp, date: null, time: null }
});

export const changeHomeDeliveryStatus = state => ({
  ...state,
  delivery: { ...state.delivery, needed: !state.delivery.needed }
});

export const changeHomePickupStatus = state => ({
  ...state,
  pickUp: { ...state.pickUp, needed: !state.pickUp.needed }
});

export const setPickupTimeSlot = (state, { time }) => ({
  ...state,
  pickUp: { ...state.pickUp, time }
});

export const checkZipCodePending = state => ({
  ...state,
  fetching: true,
  processed: false
});

export const checkZipCodeFailure = state => ({
  ...state,
  fetching: false,
  processed: true,
  error: true
});

export const checkZipCodeSuccess = state => ({
  ...state,
  fetching: false,
  processed: true,
  error: false
});

export const dfhReset = state => ({
  ...state,
  fetching: false,
  processed: false,
  error: false,
  delivery: { needed: true },
  pickUp: { needed: true },
  items: [],
  weightCheck: {}
});

export const setDfhFromLocation = (state, { locationId }) => ({
  ...state,
  from: { ...state.from, locationId }
});

export const setDfhFromAddress = (state, { address }) => ({
  ...state,
  from: { ...state.from, ...address }
});

export const setDfhToLocation = (state, { locationId }) => ({
  ...state,
  to: { ...state.to, locationId }
});

export const setDfhToAddress = (state, { address }) => ({
  ...state,
  to: { ...state.to, ...address }
});

export const setDeliveryDfhCentre = (state, { centre }) => ({
  ...state,
  delivery: { ...state.delivery, centreId: centre.id, centreName: centre.name }
});

export const setPickupDfhCentre = (state, { centre }) => ({
  ...state,
  pickUp: { ...state.pickUp, centreId: centre.id, centreName: centre.name }
});

export const checkMaxWeightSuccess = (state, { response }) => ({
  ...state,
  weightCheck: response,
  processed: true
});

export const checkMaxWeightPending = state => ({ ...state, weightCheck: {} });

export const checkMaxWeightFailure = state => ({
  ...state,
  error: true,
  fetching: false
});

export const removeItem = (state, { index }) => ({
  ...state,
  items: [...state.items.slice(0, index), ...state.items.slice(index + 1)]
});

export const resetWeightCheck = state => ({
  ...state,
  weightCheck: {}
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_DELIVERY_LOCATION]: setDeliveryLocation,
  [Types.PACKAGING_TYPES_PENDING]: packagingTypesPending,
  [Types.PACKAGING_TYPES_SUCCESS]: packagingTypesSuccess,
  [Types.PACKAGING_TYPES_FAILURE]: packagingTypesFailure,
  [Types.ADD_ITEM]: addItem,
  [Types.DFH_DATES_PENDING]: dfhDatesPending,
  [Types.DFH_DATES_SUCCESS]: dfhDatesSuccess,
  [Types.DFH_DATES_FAILURE]: dfhDatesFailure,
  [Types.SET_DFH_DELIVERY_DATE]: setDfhDeliveryDate,
  [Types.SET_DFH_PICKUP_DATE]: setDfhPickupDate,
  [Types.DFH_TIME_SLOTS_PENDING]: dfhTimeSlotsPending,
  [Types.DFH_TIME_SLOTS_SUCCESS]: dfhTimeSlotsSuccess,
  [Types.DFH_TIME_SLOTS_FAILURE]: dfhTimeSlotsFailure,
  [Types.SET_DELIVERY_TIME_SLOT]: setDeliveryTimeSlot,
  [Types.SET_PICKUP_TIME_SLOT]: setPickupTimeSlot,
  [Types.CHANGE_HOME_DELIVERY_STATUS]: changeHomeDeliveryStatus,
  [Types.CHANGE_HOME_PICKUP_STATUS]: changeHomePickupStatus,
  [Types.CHECK_ZIP_CODE_PENDING]: checkZipCodePending,
  [Types.CHECK_ZIP_CODE_SUCCESS]: checkZipCodeSuccess,
  [Types.CHECK_ZIP_CODE_FAILURE]: checkZipCodeFailure,
  [Types.DFH_SUMMARY_PENDING]: dfhSummaryPending,
  [Types.DFH_SUMMARY_SUCCESS]: dfhSummarySuccess,
  [Types.DFH_SUMMARY_FAILURE]: dfhSummaryFailure,
  [Types.CHECK_MAX_WEIGHT_PENDING]: checkMaxWeightPending,
  [Types.CHECK_MAX_WEIGHT_SUCCESS]: checkMaxWeightSuccess,
  [Types.CHECK_MAX_WEIGHT_FAILURE]: checkMaxWeightFailure,
  [Types.DFH_RESET]: dfhReset,
  [Types.DFH_DELIVERY_CENTRES_PENDING]: dfhDeliveryCentresPending,
  [Types.DFH_PICKUP_CENTRES_PENDING]: dfhPickupCentresPending,
  [Types.DFH_DELIVERY_CENTRES_SUCCESS]: dfhDeliveryCentresSuccess,
  [Types.DFH_PICKUP_CENTRES_SUCCESS]: dfhPickupCentresSuccess,
  [Types.DFH_CENTRES_FAILURE]: dfhCentresFailure,
  [Types.SET_DFH_FROM_LOCATION]: setDfhFromLocation,
  [Types.SET_DFH_FROM_ADDRESS]: setDfhFromAddress,
  [Types.SET_DFH_TO_LOCATION]: setDfhToLocation,
  [Types.SET_DFH_TO_ADDRESS]: setDfhToAddress,
  [Types.SET_DELIVERY_DFH_CENTRE]: setDeliveryDfhCentre,
  [Types.SET_PICKUP_DFH_CENTRE]: setPickupDfhCentre,
  [Types.REMOVE_ITEM]: removeItem,
  [Types.RESET_WEIGHT_CHECK]: resetWeightCheck
});
