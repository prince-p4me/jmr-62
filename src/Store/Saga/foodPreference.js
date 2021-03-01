import { put, call } from "redux-saga/effects";
import FtypeActions from "../Redux/foodPreference";

export function* setFtype(api, action) {
    // yield put(CategoryActions.categoriesPending);
    const response = yield call(api.setFtype, action.parameters);

    if (response.ok) {
        // const firstUser = path(['data', 'items'], response)[0]
        // const avatar = firstUser.avatar_url
        // // do data conversion here if needed
        yield put(FtypeActions.ftypeSuccess(action.parameters.foodPref));
        console.warn("response is as follow");
        console.warn(response)

    } else {
        console.warn("The error occured");
        yield put(PincodeActions.ftypeFailure(action.parameters.foodPref));
    }
}
