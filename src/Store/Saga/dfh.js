import { put, call } from "redux-saga/effects";
import DfhActions from "../Redux/dfh";

export function* getPackagingTypes(api) {
  const response = yield call(api.getPackagingTypes);

  if (response.ok) {
    yield put(DfhActions.packagingTypesSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* getDeliveryDfhCentres(api, action) {
  yield put(DfhActions.dfhDeliveryCentresPending());
  const response = yield call(api.getDfhCentres, action.locationId);

  if (response.ok) {
    yield put(DfhActions.dfhDeliveryCentresSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* getPickupDfhCentres(api, action) {
  yield put(DfhActions.dfhPickupCentresPending());
  const response = yield call(api.getDfhCentres, action.locationId);

  if (response.ok) {
    yield put(DfhActions.dfhPickupCentresSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* getDfhDeliveryDates(api, action) {
  yield put(DfhActions.dfhDatesPending());

  const response = yield call(api.getDfhDeliveryDates, action.parameters);

  if (response.ok) {
    yield put(DfhActions.dfhDatesSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* getDfhDeliveryTimeSlots(api, action) {
  yield put(DfhActions.dfhTimeSlotsPending());

  const response = yield call(api.getDfhDeliveryTimeSlots, action.parameters);

  if (response.ok) {
    yield put(DfhActions.dfhTimeSlotsSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* getDfhPickupDates(api, action) {
  yield put(DfhActions.dfhDatesPending());

  const response = yield call(api.getDfhPickupDates, action.parameters);

  if (response.ok) {
    yield put(DfhActions.dfhDatesSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* getDfhPickupTimeSlots(api, action) {
  yield put(DfhActions.dfhTimeSlotsPending());

  const response = yield call(api.getDfhPickupTimeSlots, action.parameters);

  if (response.ok) {
    yield put(DfhActions.dfhTimeSlotsSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* getDfhSummary(api, action) {
  // yield put(DfhActions.dfhSummaryPending());

  const response = yield call(api.getDfhSummary, action.parameters);

  if (response.ok) {
    yield put(DfhActions.dfhSummarySuccess(response.data.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* checkZipCode(api, action) {
  yield put(DfhActions.checkZipCodePending());

  const response = yield call(api.checkZipCode, action.parameters);

  if (response.ok) {
    yield put(DfhActions.checkZipCodeSuccess());
  } else {
    console.log("The error occured");
    yield put(DfhActions.checkZipCodeFailure());
  }
}

export function* checkMaxWeight(api, action) {
  yield put(DfhActions.checkMaxWeightPending());

  const response = yield call(api.checkMaxWeight, action.parameters);

  if (response.ok) {
    yield put(DfhActions.checkMaxWeightSuccess(response.data));
  } else {
    console.log("The error occured");
    yield put(DfhActions.checkMaxWeightFailure());
  }
}
