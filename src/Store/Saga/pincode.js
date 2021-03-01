import { put, call } from "redux-saga/effects";
import PincodeActions from "../Redux/pincode";

export function* setPincode(api, action) {
    // yield put(CategoryActions.categoriesPending);
    const response = yield call(api.setPincode, action.parameters);

    if (response.ok) {
        // const firstUser = path(['data', 'items'], response)[0]
        // const avatar = firstUser.avatar_url
        // // do data conversion here if needed
        yield put(PincodeActions.pincodeSuccess(action.parameters.pincode));
        console.warn("response is as follow");

    } else {
        console.warn("The error occured");
        yield put(PincodeActions.pincodeFailure(action.parameters.pincode));
    }
}
