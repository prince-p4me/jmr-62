import { put, call } from "redux-saga/effects";
import CommunityActions from "../Redux/community";

export function* getCommunities(api, action) {
  // yield put(CategoryActions.categoriesPending);
  const response = yield call(api.getCommunities, action.parameters);

  if (response.ok) {
    // const firstUser = path(['data', 'items'], response)[0]
    // const avatar = firstUser.avatar_url
    // // do data conversion here if needed
    yield put(CommunityActions.communitiesSuccess(response.data));
  } else {
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
