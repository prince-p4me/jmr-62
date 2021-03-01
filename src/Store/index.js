import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Redux";
import rootSaga from "./Saga";

import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["subCategory", "product"]
  //   blacklist: ["shippingLocation"]
};

const pReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  pReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
// const store = createStore(
//   pReducer,
//   composeEnhancers(applyMiddleware(logger, sagaMiddleware))
// );
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
