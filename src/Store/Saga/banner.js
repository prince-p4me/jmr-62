import { put, call } from "redux-saga/effects";
import BannerActions from "../Redux/banner";
import Banner1Actions from "../Redux/banner1";
import Banner2Actions from "../Redux/banner2";

export function* getBanners(api, action) {
  yield put(BannerActions.bannersPending());
  const response = yield call(api.getBanners, action.shoppingLocationId);

  if (response.ok) {
    // const firstUser = path(['data', 'items'], response)[0]
    // const avatar = firstUser.avatar_url
    // // do data conversion here if needed
    // console.log(response.data);
    for (let i = 0; i < response.data.length; i++) {
      response.data[i].image = response.data[i].url;
    }
    yield put(BannerActions.bannersSuccess(response.data));
  } else {
    yield put(BannerActions.bannersFailure());
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}

export function* getBanners1(api, action) {
  yield put(Banner1Actions.banners1Pending());
  const response = yield call(api.getBanners1, action.shoppingLocationId);

  if (response.ok) {
    for (let i = 0; i < response.data.length; i++) {
      response.data[i].image = response.data[i].url;
    }
    yield put(Banner1Actions.banners1Success(response.data));
  } else {
    yield put(Banner1Actions.banners1Failure());
    console.log("The error occured");
  }
}

export function* getBanners2(api, action) {
  yield put(Banner2Actions.banners2Pending());
  const response = yield call(api.getBanners2, action.shoppingLocationId);

  if (response.ok) {
    for (let i = 0; i < response.data.length; i++) {
      response.data[i].image = response.data[i].url;
    }
    yield put(Banner2Actions.banners2Success(response.data));
  } else {
    yield put(Banner2Actions.banners2Failure());
    console.log("The error occured");
  }
}